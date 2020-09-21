// import React from 'react';
import {addChatPostActionCreator, newChatPostChangeActionCreator} from "../../redux/chat_reducer";
import {connect} from "react-redux";

import Chat from "./Chat";
import React from "react";

class ChatContainer extends React.Component{
    render() {
        return <Chat
            chat={this.props.chat}
            newChatPostText={this.props.newChatPostText}
            onChatAddPost={this.props.onChatAddPost}
            onChatNewPostChange={this.props.onChatNewPostChange}
        />
    }
}

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

// const ChatContainer =


export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);