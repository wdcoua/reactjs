import React from 'react';
import ChatPosts from "./ChatPosts/ChatPosts";
import ChatSendForm from "./ChatSendForm/ChatSendForm";

const Chat = (props) => {

    return (

        <div>
            <h1>Чат</h1>
            {/*{props.chat.map(e => <ChatPosts*/}
            {/*    id={e.id}*/}
            {/*    author={e.author}*/}
            {/*    authorAva={e.authorAva}*/}
            {/*    text={e.text}*/}
            {/*    date={e.date}*/}
            {/*/>)}*/}
            <ChatPosts
                chat={props.chat}
            />
            <ChatSendForm
                newChatPostText={props.newChatPostText}
                onChatAddPost={props.onChatAddPost}
                onChatNewPostChange={props.onChatNewPostChange}
            />
        </div>
    );
}

export default Chat;