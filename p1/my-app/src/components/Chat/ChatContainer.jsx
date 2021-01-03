import {addChatPost, newChatPostChange} from "../../redux/chat_reducer";
import {connect} from "react-redux";
import Chat from "./Chat";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const ChatContainer = ({chat,newChatPostText,addChatPost,newChatPostChange}) => {
    return <Chat
        chat={chat}
        newChatPostText={newChatPostText}
        addChatPost={addChatPost}
        newChatPostChange={newChatPostChange}
    />
}
/*

class ChatContainer2 extends React.Component{
    render() {


    }
}
*/

let mapStateToProps = (state) => {
    return {
        chat: state.chat.chatPosts,
        newChatPostText: state.chat.newChatPostText,
    }
}


export default compose(
    connect(mapStateToProps, {addChatPost,
        newChatPostChange}),
    withAuthRedirect
)(ChatContainer)
