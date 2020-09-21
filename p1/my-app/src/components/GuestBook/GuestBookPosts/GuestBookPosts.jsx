import React from 'react';
import Post from "./Post/Post";

const GuestBookPosts = (props) => {

    // let posts =  props.gbPosts.map(p => <Post id={p.id}
    //                                           key={p.id}
    //                                           text={p.text}
    //                                           author={p.author}
    //                                           authorID={p.authorID}
    //                                           authorAva={p.authorAva}
    //                                           date={p.date}
    // />);

    let posts =  props.gbPosts.map(p => <Post id={p.id}
                                              key={p.id}
                                              text={p.text}
                                              login={p.login}
                                              status={p.status}
                                              time={p.time}
                                              email={p.email}
    />);

    return (
      <div >
          {posts}
      </div>
  );
}

export default GuestBookPosts;