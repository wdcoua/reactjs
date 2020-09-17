import React from 'react';
import c from './GuestBookPosts.module.css';
import Example from "../../Examples/Example/Example";
import Post from "./Post/Post";
import Main from "../../Main/Main";

const GuestBookPosts = (props) => {

    //console.log('props - '+props)

    let posts =  props.gbPosts.map(p => <Post id={p.id}
                                              text={p.text}
                                              author={p.author}
                                              authorID={p.authorID}
                                              authorAva={p.authorAva}
                                              date={p.date}
    />);

    return (
      <div >
          {posts}
      </div>
  );
}

export default GuestBookPosts;