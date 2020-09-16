import React from 'react';
import ChatPost from "./ChatPost/ChatPost";
import ChatSendForm from "./ChatSendForm/ChatSendForm";

const Chat = (props) => {

    const chat = props.chat.chatPosts.map(e => <ChatPost
        id={e.id} author={e.author} authorAva={e.authorAva} text={e.text} date={e.date}/>);

    return (

        <div>
            <h1>Чат</h1>

            {chat}

            <ChatSendForm newChatPostText={props.chat.newChatPostText} dispatch={props.dispatch} />
        </div>
    );
}

export default Chat;