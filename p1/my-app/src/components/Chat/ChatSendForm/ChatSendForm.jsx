import React from 'react';
import c from './ChatSendForm.module.css';


const ChatSendForm = (props) => {

    let new_chat_post = React.createRef();

    let onPostChange = () => {
        let text = new_chat_post.current.value;
        props.newChatPostChange(text);
    }

    let addPost = () => {
        props.addChatPost();
        props.newChatPostChange('');
    }


    return (
        <div className={c.chat_form}>

            <textarea
                className={c.chat_text}
                ref={new_chat_post}
                value={props.newChatPostText}
                onChange={onPostChange}/>
            <button className={c.chat_button} onClick={addPost}>Send</button>
        </div>

    );
}

export default ChatSendForm;