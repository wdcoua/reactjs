import React from 'react';
import c from './ChatSendForm.module.css';
// import {addChatPostActionCreator, newChatPostChangeActionCreator} from "../../../redux/chat_reducer";


const ChatSendForm = (props) => {




    let new_chat_post = React.createRef();

    let onPostChange = () => {
        let text = new_chat_post.current.value;
        // props.dispatch(newChatPostChangeActionCreator(text)); //gbNewPostChange('');

        props.onChatNewPostChange(text);

    }

    let addPost = () => {
        //let text = new_chat_post.current.value;
        props.onChatAddPost();
        props.onChatNewPostChange('');

        // props.dispatch(addChatPostActionCreator());//  addGBpost();
        // props.dispatch(newChatPostChangeActionCreator('')); //gbNewPostChange('');
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