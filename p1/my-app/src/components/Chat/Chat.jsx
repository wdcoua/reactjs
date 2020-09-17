import React from 'react';
import ChatPost from "./ChatPost/ChatPost";
import ChatSendForm from "./ChatSendForm/ChatSendForm";

const Chat = (props) => {

    return (

        <div>
            <h1>Чат</h1>
            {props.chat.map(e => <ChatPost
                id={e.id}
                author={e.author}
                authorAva={e.authorAva}
                text={e.text}
                date={e.date}
            />)}
            <ChatSendForm
                newChatPostText={props.newChatPostText}
                onChatAddPost={props.onChatAddPost}
                onChatNewPostChange={props.onChatNewPostChange}
            />
        </div>
    );
}

export default Chat;