import React from 'react';
import defaultUserPhoto from '../../../images/user.png'
import style from './User.module.css'
import {NavLink} from "react-router-dom";

const realFollow = (id, followToggle,follow) => { /* 1233, true */
    //debugger
    //props.setFetchingStatus(true);
    follow(id, followToggle);

}

const User = ({user,followingIsInProgress,follow}) => {

    return (
        <div>


                 <div key={user.id} className={style.oneUser}>


                    <NavLink to={'/profile/' + user.id}>
                        <img alt={user.name} className={style.userPhoto}
                             src={user.photos.small != null ? user.photos.small : defaultUserPhoto}/> {user.name}
                    </NavLink>
                    {/*<a href={'userview/' + user.id}></a>*/}
                    :
                    {user.status != null ? ' "' + user.status + '" ' : ''}
                    {user.uniqueUrlName != null ? ' - ' + user.uniqueUrlName + ' - ' : ''}
                    <button
                        disabled={followingIsInProgress.some(id => id === user.id)}
                        onClick={
                            () => {
                                //props.changeUserFollowStatus(user.id, (user.followed === true ? 0 : 1));
                                realFollow(user.id, !user.followed,follow);
                            }
                        }>
                        {(user.followed === true ? 'unfollow' : 'follow')
                        }
                    </button>
                </div>



        </div>
    );
}

export default User;

