import React from 'react';
import Post from "./Post/Post";

const GuestBookPosts = ({gbPosts}) => {

    let posts =  gbPosts.map(p => <Post id={p.id}
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