import React from 'react';
// import c from './Example.module.css';
import defaultUserPhoto from '../../../images/user.png'
import style from './User.module.css'

const User = (props) => {
    // let changeFollowStatus = () => {
    //     props.changeFollowStatus()
    // }



    let onChangeFolStatus = () => {
        let uid = props.user.id;
        let fol = (props.user.followed === true ? 0 : 1);

        // (props.user.id, (props.user.followed === true ? '0' : '1'))

        props.changeFollowStatus(uid,fol);
    }

    return (
        <div>
            <img alt={props.user.name} className={style.userphoto} src={props.user.photos.small != null ? props.user.photos.small : defaultUserPhoto}/>

            <a href={'userview/' + props.user.id}>{props.user.name}</a>:
            {props.user.status != null ? ' "'+props.user.status+'" ': ''}
            {props.user.uniqueUrlName != null ? ' - '+props.user.uniqueUrlName+' - ': ''}
            {/*[{(props.user.followed === true ? 'followed' : 'not followed')}]*/}
            <button
            onClick={
                onChangeFolStatus
            }>
                {(props.user.followed === true ? 'unfollow' : 'follow')
                }
            </button>
        </div>
    );
}

export default User;

