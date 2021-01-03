import React from 'react';
import defaultUserPhoto from '../../../images/user.png'
import style from './User.module.css'
import {NavLink} from "react-router-dom";
import User from "./User";
//import {API} from "../../../api/api";



const Users = ({users,followingIsInProgress,follow}) => {
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

            {users.map(user => <User key={user.id}
                user={user}
                followingIsInProgress={followingIsInProgress}
                follow={follow}
            />



            )}


        </div>
    );
}

export default Users;

