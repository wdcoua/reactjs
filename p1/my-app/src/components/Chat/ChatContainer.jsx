import React from 'react';
import ChatPost from "./ChatPost/ChatPost";
import ChatSendForm from "./ChatSendForm/ChatSendForm";
import {addChatPostActionCreator, newChatPostChangeActionCreator} from "../../redux/chat_reducer";
import StoreContext from "../../StoreContext";

const ChatContainer = () => {


    return (<StoreContext.Consumer>
            {
                (store) => {
                    let onChatNewPostChange = (text) => {
                        store.dispatch(newChatPostChangeActionCreator(text));
                    }

                    let onChatAddPost = () => {
                        store.dispatch(addChatPostActionCreator());
                        store.dispatch(newChatPostChangeActionCreator(''));
                    }

                    const chat = store.getState().chat.chatPosts.map(e => <ChatPost
                        id={e.id}
                        author={e.author}
                        authorAva={e.authorAva}
                        text={e.text}
                        date={e.date}
                    />);

                    return <div>
                        <h1>Чат</h1>
                        {chat}
                        <ChatSendForm
                            newChatPostText={store.getState().chat.newChatPostText}
                            onChatAddPost={onChatAddPost}
                            onChatNewPostChange={onChatNewPostChange}
                        />
                    </div>
                }
            }
        </StoreContext.Consumer>
    );
}

export default ChatContainer;