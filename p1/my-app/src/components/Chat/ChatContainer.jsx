// import React from 'react';
import {addChatPostActionCreator, newChatPostChangeActionCreator} from "../../redux/chat_reducer";
import {connect} from "react-redux";

import Chat from "./Chat";


let mapStateToProps = (state) => {
    return {
        chat: state.chat.chatPosts,
        newChatPostText: state.chat.newChatPostText
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        onChatAddPost: () => {
            dispatch(addChatPostActionCreator());
            dispatch(newChatPostChangeActionCreator(''));
        },
        onChatNewPostChange: (text) => {
            //debugger
            dispatch(newChatPostChangeActionCreator(text));
        }

    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)


export default ChatContainer;