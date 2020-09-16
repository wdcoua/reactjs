import React from 'react';
import c from './GuestBookSendForm.module.css';
import {addGBPostActionCreator, newGBpostChangeActionCreator} from "../../../redux/gb_reducer";


const GuestBookSendForm = (props) => {


    let new_gb_post = React.createRef();


    let onPostChange = () => {
        let text = new_gb_post.current.value;
        props.dispatch(newGBpostChangeActionCreator(text)); //gbNewPostChange('');

    }

    let addPost = () => {
        props.dispatch(addGBPostActionCreator());//  addGBpost();
        props.dispatch(newGBpostChangeActionCreator('')); //gbNewPostChange('');
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