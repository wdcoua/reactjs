import React from 'react';
import c from './ChatSendForm.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLenCreator, required} from "../../../utils/validate/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLen10 = maxLenCreator(10);

const ChatForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'new CHAT post here'} component={Textarea}
                   name={'new_chat_post'} className={c.chat_text}
                   validate={[required,maxLen10]}
            />
            {/*<textarea

                ref={new_chat_post}
                value={props.newChatPostText}
                onChange={onPostChange}/>*/}
            <button className={c.chat_button} >Send</button>
        </form>
    )
}

const ChatReduxForm = reduxForm({
    form: 'chat_add_post'
})(ChatForm)

const ChatSendForm = (props) => {

//    let new_chat_post = React.createRef();
/*

    let onPostChange = () => {
        let text = new_chat_post.current.value;
        props.newChatPostChange(text);
    }

    let addPost = () => {
        props.addChatPost();
        props.newChatPostChange('');
    }
*/

    const onSubmit = (formData) => {
        props.addChatPost(formData.new_chat_post);
        console.log(formData)
        formData.new_chat_post = '';
    }


    return (
        <div className={c.chat_form}>
            <ChatReduxForm {...props} onSubmit={onSubmit} />
        </div>

    );
}

export default ChatSendForm;