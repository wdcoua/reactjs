import React from 'react';
import defaultUserPhoto from '../../../images/user.png'
import style from './User.module.css'
import {NavLink} from "react-router-dom";
//import {API} from "../../../api/api";




const realFollow = (id, followToggle,props) => { /* 1233, true */
    //debugger
    //props.setFetchingStatus(true);
    props.follow(id, followToggle);

}


const Users = (props) => {
    // let changeFollowStatus = () => {
    //     props.changeFollowStatus()
    // }


    // let onChangeFolStatus = (uid, fol) => {
    //     // let uid = props.user.id;
    //     // let fol = (props.user.followed === true ? 0 : 1);
    //
    //     // (props.user.id, (props.user.followed === true ? '0' : '1'))
    //
    //     props.changeFollowStatus(uid, fol);
    // }

    return (
        <div>

            {props.users.map(user => {
                //debugger
                //console.log(props.followingIsInProgress + ' props.followingIsInProgress');
                return <div key={user.id} className={style.oneUser}>


                    <NavLink to={'/profile/' + user.id}>
                        <img alt={user.name} className={style.userPhoto}
                             src={user.photos.small != null ? user.photos.small : defaultUserPhoto}/> {user.name}
                    </NavLink>
                    {/*<a href={'userview/' + user.id}></a>*/}
                    :
                    {user.status != null ? ' "' + user.status + '" ' : ''}
                    {user.uniqueUrlName != null ? ' - ' + user.uniqueUrlName + ' - ' : ''}
                    <button
                        disabled={props.followingIsInProgress.some(id => id === user.id)}
                        onClick={
                            () => {
                                //props.changeUserFollowStatus(user.id, (user.followed === true ? 0 : 1));
                                realFollow(user.id, !user.followed,props);
                            }
                        }>
                        {(user.followed === true ? 'unfollow' : 'follow')
                        }
                    </button>
                </div>


                // return <UserView key={u.id}
                //                  user={u} changeFollowStatus={props.changeFollowStatus}
                // />
            })}


        </div>
    );
}

export default Users;

