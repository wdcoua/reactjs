import React from 'react';
import c from './GuestBook.module.css';
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";

const GuestBook = (props) => {




  return (
      <div className={c.gb}>
        <GuestBookSendForm
                            dispatch={props.dispatch}
                           //  gbNewPostChange={props.gbNewPostChange}
                           // addGBpost={props.addGBpost}
                           // getGBbranch={props.getGBbranch}
                            newPostText={props.state.gb.newPostText}
                           // getGBnewPostText={props.getGBnewPostText}

        />

        <GuestBookPosts  gbPosts={props.state.gb.gbPosts} />
      </div>
  );
}

export default GuestBook;