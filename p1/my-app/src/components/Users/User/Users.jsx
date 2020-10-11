import React from 'react';
// import c from './Example.module.css';
import defaultUserPhoto from '../../../images/user.png'
import style from './User.module.css'
import {NavLink} from "react-router-dom";
// import {changeUserFollowStatusAC} from "../../../redux/users_reducer";

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
                        onClick={
                            () => {
                                props.changeUserFollowStatus(user.id, (user.followed === true ? 0 : 1));
                            }
                        }>
                        {(user.followed === true ? 'unfollow' : 'follow')
                        }
                    </button>
                </div>


                // return <UserView key={u.id}
                //                  user={u} changeFollowStatus={this.props.changeFollowStatus}
                // />
            })}


        </div>
    );
}

export default Users;

