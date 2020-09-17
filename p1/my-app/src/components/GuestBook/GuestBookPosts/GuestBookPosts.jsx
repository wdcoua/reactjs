import React from 'react';
import Post from "./Post/Post";

const GuestBookPosts = (props) => {

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