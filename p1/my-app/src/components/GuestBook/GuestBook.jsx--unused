import React from 'react';
import c from './GuestBook.module.css';
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";

const GuestBook = (props) => {




  return (
      <div className={c.gb}>
               <GuestBookSendForm
                  onGBNewPostChange={props.onGBNewPostChange}
                  onGBAddPost={props.onGBAddPost}
                  newPostText={props.newPostText}
              />

              <GuestBookPosts gbPosts={props.gbPosts}/>
          </div>
  );
}

export default GuestBook;