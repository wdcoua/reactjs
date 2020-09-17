import React from 'react';
import c from './GuestBook.module.css';
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";
import {addGBPostActionCreator, newGBpostChangeActionCreator} from "../../redux/gb_reducer";
import StoreContext from "../../StoreContext";

const GuestBook = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let onGBNewPostChange = (text) => {
                        store.dispatch(newGBpostChangeActionCreator(text));
                    }

                    let onGBAddPost = () => {

                        store.dispatch(addGBPostActionCreator());//
                        store.dispatch(newGBpostChangeActionCreator(''));
                    }

                    return <div className={c.gb}>
                        <GuestBookSendForm
                            onGBNewPostChange={onGBNewPostChange}
                            onGBAddPost={onGBAddPost}
                            newPostText={store.getState().gb.newPostText}
                        />

                        <GuestBookPosts gbPosts={store.getState().gb.gbPosts}/>
                    </div>
                }
            }
        </StoreContext.Consumer>
    );
}

export default GuestBook;