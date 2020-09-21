import React from 'react';
import c from './Post.module.css';
import defaultUserPhoto from '../../../../images/user.png'

const Post = (props) => {
  return (
      <div className={c.gb_post}>
          <div className={c.gb_post_body}>
              <a href={'user/'+props.id} className={c.name}>{props.login}<br/>
                <img src={defaultUserPhoto} className={c.ava}  alt='alt'/>
              </a>
              <div className={c.gb_post_text}>{props.text}</div>
          </div>

          <div className={c.gb_post_date}>{props.time}<br/>{props.email}</div>
          <div className={c.gb_post_admin}><a href={'editpost/'+props.id}>edit</a>|<a href={'delpost/'+props.id}>delete</a></div>

      </div>
  );
}

export default Post;