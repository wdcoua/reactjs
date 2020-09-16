import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
      <div className={c.gb_post}>
          <div className={c.gb_post_body}>
              <a href={'user/'+props.authorID} className={c.name}>{props.author}<br/><img src={props.authorAva} className={c.ava}/></a>
              <div className={c.gb_post_text}>{props.text}</div>
          </div>

          <div className={c.gb_post_date}>{props.date}</div>
          <div className={c.gb_post_admin}><a href={'editpost/'+props.id}>edit</a>|<a href={'delpost/'+props.id}>delete</a></div>

      </div>
  );
}

export default Post;