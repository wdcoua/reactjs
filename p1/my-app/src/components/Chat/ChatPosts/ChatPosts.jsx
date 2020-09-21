import React from 'react';
import c from './ChatPost.module.css';

const ChatPosts = (props) => {

    return (
        props.chat.map(chat =>
            <div key={chat.id} className={c.chatpost+(chat.author === 'Admin' ? ' '+c.admin_post : '')}>

                <div className={c.chatpost_body}>
                    <div className={c.avaimg}><img src={chat.authorAva} className={c.ava} alt="ava"/></div>

                    <div className={c.name}>{chat.author}</div>
                    <div className={c.chatpost_text}>{chat.text}</div>
                </div>

                <div className={c.chatpost_date}>{chat.date}</div>
                <div className={c.chatpost_admin}><a href={'editpost/'+chat.id}>edit</a>|<a href={'delpost/'+chat.id}>delete</a></div>

            </div>

)


    );
}

export default ChatPosts;