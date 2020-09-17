import React from 'react';
import c from './GuestBook.module.css';
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";
import {addGBPostActionCreator, newGBpostChangeActionCreator} from "../../redux/gb_reducer";
// debugger
const GuestBook = (props) => {


    let store = props.store;

    let onGBNewPostChange = (text) => {


        store.dispatch(newGBpostChangeActionCreator(text)); //gbNewPostChange('');
    }

    let onGBAddPost = () => {

        store.dispatch(addGBPostActionCreator());//
        store.dispatch(newGBpostChangeActionCreator(''));
    }




    return (
      <div className={c.gb}>
        <GuestBookSendForm
                            // dispatch={props.store.dispatch}
                            onGBNewPostChange={onGBNewPostChange}
                            onGBAddPost={onGBAddPost}
                           //  gbNewPostChange={props.gbNewPostChange}
                           // addGBpost={props.addGBpost}
                           // getGBbranch={props.getGBbranch}
                            newPostText={store.getState().gb.newPostText}
                           // getGBnewPostText={props.getGBnewPostText}

        />

        <GuestBookPosts  gbPosts={store.getState().gb.gbPosts} />
      </div>
  );
}

export default GuestBook;