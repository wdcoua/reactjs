import {connect} from "react-redux";
import {
    setFetchingStatus,
    changeUserFollowStatus,
    setCurrentPage,
    setTotalUsers,
    setUsers, setFollowingInProgress
} from "../../redux/users_reducer";
import React from "react";
import styles from "./User/User.module.css";
import Users from "./User/Users";
import Preloader from "../Preloader/Preloader";

import {API} from "../../api/api"


class UsersContainer extends React.Component {
/*
    apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc'
    // baseURL = 'https://wd.co.ua/api.php'
    baseURL = 'https://social-network.samuraijs.com/api/1.0/'
    // currPage = 4
    instance = axios.create({
        withCredentials: true,
        baseURL: this.baseURL,
        headers: {
            'API-KEY': this.apiKey
        }

    });
*/
    componentDidMount() {


        this.props.setFetchingStatus(true);
        API.getUsers( this.props.usersPerPage ,this.currentPage)
            .then(data => {
                // debugger
                this.props.setFetchingStatus(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsers(data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }

    openPageNumber(n) {


        this.props.setCurrentPage(n);
        this.props.setFetchingStatus(true);
        API.getUsers( this.props.usersPerPage , n)
            .then(data => {
                // debugger
                this.props.setFetchingStatus(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsers(data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });

    }


    showPages() {


        let pages = Math.ceil(this.props.totalUsers / this.props.usersPerPage);
        let out = [];
        let cp = this.props.currentPage;
        let prev_is_shown = 0;

        if (pages > 5) {

            for(let p = 1; p <= pages; p++){

                if(p === 1 || p === pages){
                    out.push((<span
                        key={p}
                        onClick={
                            (cp === p ? '' : () => {
                                    this.openPageNumber(p)
                                }
                            )
                        }
                        className={cp === p ? styles.currentPage : '' + ' ' + styles.pages}
                    > {p} </span>));
                    prev_is_shown = 0;
                }

                if( ((p === cp && cp !== 1 && cp !== pages) ||
                    (p === cp-1 && cp-1 !== 1 ) ||
                    (p === cp+1 && cp+1 !== pages ) )   ){
                    out.push((<span
                        key={p}
                        onClick={
                            (cp === p ? '' : () => {
                                    this.openPageNumber(p)
                                }
                            )
                        }
                        className={cp === p ? styles.currentPage : '' + ' ' + styles.pages}
                    > {p} </span>));
                    prev_is_shown = 0;
                }

                if (prev_is_shown === 1)
                out.push(' ... ');

                prev_is_shown++;

            }


            /* simple

            for (let i = 1; i <= pages; i++) {
                if (cp === i) {
                    out.push((<span
                        key={i}
                        className={styles.currentPage + ' ' + styles.pages}
                    > {i} </span>))
                } else {
                    out.push((<span
                        key={i}
                        onClick={() => {
                            this.openPageNumber(i)
                        }}
                        className={styles.pages}
                    > {i} </span>))
                }
            }
            */


        } else {    // якщо сторінок <= 5

            //     console.log(styles.currentPage)
            //     debugger
            for (let i = 1; i <= 5; i++) {
                if (cp === i) {
                    out.push((<span key={i} className={styles.currentPage + ' ' + styles.pages}> {i} </span>))
                } else {
                    out.push((<span key={i} onClick={() => {
                        this.openPageNumber(i)
                    }} className={styles.pages}> {i} </span>))
                }
            }
        }

        return (
            <div>Pages:<br/>
                {out}<br/><br/>
            </div>
        )
    }

    render() {


        return ( <>
                {this.props.isFetching ? <Preloader /> : null}
            <div>
                {this.showPages()}
                <Users
                    users={this.props.users}
                    showPages={this.showPages}
                    changeUserFollowStatus={this.props.changeUserFollowStatus}
                    setFetchingStatus={this.props.setFetchingStatus}
                    setFollowingInProgress={this.props.setFollowingInProgress}
                    followingIsInProgress={this.props.followingIsInProgress}


                />
            </div>

            </>

        )
    }
}

let mapStateToProps = (state) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    //debugger
    return {
        users: state.users.usersList,
        usersPerPage:state.users.usersPerPage,
        totalUsers:state.users.totalUsers,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingIsInProgress: state.users.followingIsInProgress

    }
}
//
// let mapDispatchToProps = (dispatch) => { // передає дочірній компоненті колбеки (функції)
//
//     return {
//         changeUserFollowStatus: (user_id,follow_status) => {
//             // debugger
//             dispatch(changeUserFollowStatusAC(user_id,follow_status));
//         },
//         setUsers:(users) => {
//             // debugger
//             dispatch(setUsersAC(users));
//         },
//         setTotalUsers:(total) => {
//             // debugger
//             dispatch(setTotalUsersAC(total));
//         },
//         setCurrentPage:(currentPage) => {
//             // debugger
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setFetchingStatus:(isFetching) => {
//             // debugger
//             dispatch(changeFetchingStatusAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps, {
    changeUserFollowStatus,
    setUsers,
    setTotalUsers,
    setCurrentPage,
    setFetchingStatus,
    setFollowingInProgress
})(UsersContainer)
