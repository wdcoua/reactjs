import React from 'react';
// import c from './Example.module.css';
import defaultUserPhoto from '../../../images/user.png'
import style from './User.module.css'

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

                    <img alt={user.name} className={style.userPhoto}
                         src={user.photos.small != null ? user.photos.small : defaultUserPhoto}/>

                    <a href={'userview/' + user.id}>{user.name}</a>:
                    {user.status != null ? ' "' + user.status + '" ' : ''}
                    {user.uniqueUrlName != null ? ' - ' + user.uniqueUrlName + ' - ' : ''}
                    <button
                        onClick={
                            () => {
                                props.changeFollowStatus(user.id, (user.followed === true ? 0 : 1));
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

