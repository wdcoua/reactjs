import {addChatPost, newChatPostChange} from "../../redux/chat_reducer";
import {connect} from "react-redux";
import Chat from "./Chat";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ChatContainer extends React.Component{
    render() {

        return <Chat
            chat={this.props.chat}
            newChatPostText={this.props.newChatPostText}
            addChatPost={this.props.addChatPost}
            newChatPostChange={this.props.newChatPostChange}
        />
    }
}

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
