import React from 'react';
import c from './GuestBookSendForm.module.css';

const GuestBookSendForm = (props) => {


    let new_gb_post = React.createRef();


    let onPostChange = () => {
        let text = new_gb_post.current.value;
        props.onGBNewPostChange(text);

    }

    let addPost = () => {
        props.onGBAddPost();
        props.onGBNewPostChange('');
    }


    return (
        <div className={c.gb_form}>
          <textarea
              className={c.gb_form_text}
              ref={new_gb_post}
              value={props.newPostText}
              onChange={onPostChange}
          />
            <button className={c.gb_form_button} onClick={addPost}>Send</button>
        </div>
    );
}

export default GuestBookSendForm;