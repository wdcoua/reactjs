import React from 'react';
import c from './ChatPost.module.css';

const ChatPost = (props) => {


    //const chat = props.chatPosts.map(e => <ChatPost
        //id={e.id} author={e.author} authorAva={e.authorAva} text={e.text} date={e.date}/>);


    return (
        <div className={c.chatpost+(props.author == 'Admin' ? ' '+c.admin_post : '')}>

            <div className={c.chatpost_body}>
                <div className={c.avaimg}><img src={props.authorAva} className={c.ava}/></div>

                <div className={c.name}>{props.author}</div>
                <div className={c.chatpost_text}>{props.text}</div>
            </div>

            <div className={c.chatpost_date}>{props.date}</div>
            <div className={c.chatpost_admin}><a href={'editpost/'+props.id}>edit</a>|<a href={'delpost/'+props.id}>delete</a></div>

        </div>

    );
}

export default ChatPost;