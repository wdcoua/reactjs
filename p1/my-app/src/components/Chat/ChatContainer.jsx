import React from 'react';
import ChatPost from "./ChatPost/ChatPost";
import ChatSendForm from "./ChatSendForm/ChatSendForm";
import {addChatPostActionCreator, newChatPostChangeActionCreator} from "../../redux/chat_reducer";

const ChatContainer = (props) => {

    let store = props.store;

    let onChatNewPostChange = (text) => {

        store.dispatch(newChatPostChangeActionCreator(text)); //gbNewPostChange('');
    }

    let onChatAddPost = () => {

        store.dispatch(addChatPostActionCreator());//  addGBpost();
        store.dispatch(newChatPostChangeActionCreator('')); //gbNewPostChange('');
    }



    const chat = store.getState().chat.chatPosts.map(e => <ChatPost

        id={e.id}
        author={e.author}
        authorAva={e.authorAva}
        text={e.text}
        date={e.date}
    />);

    return (

        <div>
            <h1>Чат</h1>

            {chat}

            <ChatSendForm
                newChatPostText={store.getState().chat.newChatPostText}
                // dispatch={props.store.dispatch}
                onChatAddPost={onChatAddPost}
                onChatNewPostChange={onChatNewPostChange}
            />
        </div>
    );
}

export default ChatContainer;