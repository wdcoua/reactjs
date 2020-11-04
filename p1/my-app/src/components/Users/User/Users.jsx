import React from 'react';
import defaultUserPhoto from '../../../images/user.png'
import style from './User.module.css'
import {NavLink} from "react-router-dom";
import {API} from "../../../api/api";



const realFollow = (id, followToggle,props) => { /* 1233, true */
    //debugger
    props.setFetchingStatus(true);

    if(followToggle){ // follow

        API.follow( id)
            .then(data => {
                // debugger
                if(data.resultCode === 0){ // чи потрібно?

                    props.setFetchingStatus(false);
                    props.changeUserFollowStatus(id, 1)


                    //props.setUsers(resp.data.items)
                    //props.setTotalUsers(resp.data.totalCount)
                    // props.totalUsers = resp.data.totalCount
                    console.log(data)
                    //console.log('ffffff')
                }else{
                    // error
                }
            })

            .catch(error => {
                console.warn(error);
            });
    }else{ // unfollow
        API.unfollow( id)
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

