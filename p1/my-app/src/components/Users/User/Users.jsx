import React from 'react';
// import c from './Example.module.css';
import defaultUserPhoto from '../../../images/user.png'
import style from './User.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
// import {changeUserFollowStatusAC} from "../../../redux/users_reducer";


let apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc'
// baseURL = 'https://wd.co.ua/api.php'
let baseURL = 'https://social-network.samuraijs.com/api/1.0/'
// currPage = 4
let instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
        'API-KEY': apiKey
    }

});

const realFollow = (id, followToggle,props) => { /* 1233, true */
    //debugger
    props.setFetchingStatus(true);

    if(followToggle){ // follow

        instance
            // .get('?action=users&eee')
            .post('follow/' + id)
            .then(resp => {
                // debugger
                if(resp.data.resultCode === 0){ // чи потрібно?

                    props.setFetchingStatus(false);
                    props.changeUserFollowStatus(id, 1)


                    //props.setUsers(resp.data.items)
                    //props.setTotalUsers(resp.data.totalCount)
                    // props.totalUsers = resp.data.totalCount
                    console.log(resp)
                    //console.log('ffffff')
                }else{
                    // error
                }
            })

            .catch(error => {
                console.warn(error);
            });
    }else{ // unfollow
        instance
            // .get('?action=users&eee')
            .delete('follow/' + id)
            .then(resp => {
                // debugger
                props.setFetchingStatus(false);
                props.changeUserFollowStatus(id, 0)


                //props.setUsers(resp.data.items)
                //props.setTotalUsers(resp.data.totalCount)
                // props.totalUsers = resp.data.totalCount
                console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }

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

