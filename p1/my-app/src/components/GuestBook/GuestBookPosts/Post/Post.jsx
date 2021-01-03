import React from 'react';
import c from './Post.module.css';
import defaultUserPhoto from '../../../../images/user.png'

const Post = ({id,login,text,time,email}) => {
  return (
      <div className={c.gb_post}>
          <div className={c.gb_post_body}>
              <a href={'user/'+id} className={c.name}>{login}<br/>
                <img src={defaultUserPhoto} className={c.ava}  alt='alt'/>
              </a>
              <div className={c.gb_post_text}>{text}</div>
          </div>

          <div className={c.gb_post_date}>{time}<br/>{email}</div>
          <div className={c.gb_post_admin}><a href={'editpost/'+id}>edit</a>|<a href={'delpost/'+id}>delete</a></div>

      </div>
  );
}

export default Post;