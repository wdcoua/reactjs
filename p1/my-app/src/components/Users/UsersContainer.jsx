import {connect} from "react-redux";
import {
    setFetchingStatus,
    changeUserFollowStatus,
    setCurrentPage,
    setTotalUsers,
    setUsers
} from "../../redux/users_reducer";
import React from "react";
import * as axios from "axios";
import styles from "./User/User.module.css";
import Users from "./User/Users";
// import preloader from "../../images/rings.svg"
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {

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

    componentDidMount() {


        this.props.setFetchingStatus(true);
        this.instance
            // .get('?action=users&eee')
            .get('users/?count=' + this.props.usersPerPage + '&page=' + this.currentPage)
            .then(resp => {
                // debugger
                this.props.setFetchingStatus(false);
                this.props.setUsers(resp.data.items)
                this.props.setTotalUsers(resp.data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }

    openPageNumber(n) {


        this.props.setCurrentPage(n);
        this.props.setFetchingStatus(true);
        this.instance
            // .get('?action=users&eee')
            .get('users/?count=' + this.props.usersPerPage + '&page=' + n)
            .then(resp => {
                // debugger
                this.props.setFetchingStatus(false);
                this.props.setUsers(resp.data.items)
                this.props.setTotalUsers(resp.data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });

    }

    showPages() {

        let pages = Math.ceil(this.props.totalUsers / this.props.usersPerPage);
        let out = [];
        // let cp = this.props.currentPage;
        if (pages > 5) {

            // for(let p = 1; p <= pages; p++){
            //
            //
            //
            //     if(p === 1 || p === pages){
            //         out.push((<span
            //             key={p}
            //             onClick={
            //                 (cp === p ? '' : () => {
            //                         this.openPageNumber(p)
            //                     }
            //                 )
            //             }
            //             className={cp === p ? styles.currentPage : '' + ' ' + styles.pages}
            //         > -{p}- </span>))
            //     }
            //
            //     if(p === cp || p === cp-1 || p === cp+1){
            //         out.push((<span
            //             key={p}
            //             onClick={
            //                 (cp === p ? '' : () => {
            //                         this.openPageNumber(p)
            //                     }
            //                 )
            //             }
            //             className={cp === p ? styles.currentPage : '' + ' ' + styles.pages}
            //         > -{p}- </span>))
            //     }
            //
            //
            // }



            // 1


            //
            // if(cp >= 3){
            //
            //     for(let i = -1; i < 2; i++ ){
            //         out.push((<span
            //             key={cp+i}
            //             onClick={
            //                 (cp === cp+i ? '' : () => {
            //                         this.openPageNumber(cp+i)
            //                     }
            //                 )
            //             }
            //             className={cp === cp+i ? styles.currentPage : '' + ' ' + styles.pages}
            //         > {cp+i} </span>))
            //     }
            //
            // }
            //


            // if(cp <= 3){
            //     // 2
            //     out.push((<span
            //         key={2}
            //         onClick={() => {
            //             this.openPageNumber(2)
            //         }}
            //         className={styles.currentPage + ' ' + styles.pages}
            //     > {2} </span>))
            //
            //     // 3
            //     out.push((<span
            //         key={3}
            //         onClick={() => {
            //             this.openPageNumber(3)
            //         }}
            //         className={styles.currentPage + ' ' + styles.pages}
            //     > {3} </span>))
            //
            //     if(cp === 3){
            //         // 4
            //         out.push((<span
            //             key={4}
            //             onClick={() => {
            //                 this.openPageNumber(4)
            //             }}
            //             className={styles.currentPage + ' ' + styles.pages}
            //         > {4} </span>))
            //     }
            //
            //     out.push((<span
            //         key={345345345}
            //         className= + ' ' + styles.pages}
            //     > {4} </span>))
            // }


            for (let i = 1; i <= pages; i++) {
                if (this.props.currentPage === i) {
                    out.push((<span
                        key={i}
                        onClick={() => {
                            this.openPageNumber(i)
                        }}
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



        } else {    // якщо сторінок <= 5

            //     console.log(styles.currentPage)
            //     debugger
            for (let i = 1; i <= 5; i++) {
                if (this.props.currentPage === i) {
                    out.push((<span key={i} onClick={() => {
                        this.openPageNumber(i)
                    }} className={styles.currentPage + ' ' + styles.pages}> {i} </span>))
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
                />
            </div>

            </>

        )
    }
}

let mapStateToProps = (state) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    return {
        users: state.users.usersList,
        usersPerPage:state.users.usersPerPage,
        totalUsers:state.users.totalUsers,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
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
    setFetchingStatus
})(UsersContainer)
