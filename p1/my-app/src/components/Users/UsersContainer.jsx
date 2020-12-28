import {connect} from "react-redux";
import {
    setFetchingStatus,
    changeUserFollowStatus,
    setCurrentPage,
    setTotalUsers,
    setUsers, setFollowingInProgress, getUsers, follow
} from "../../redux/users_reducer";
import React from "react";
import styles from "./User/User.module.css";
import Users from "./User/Users";
import Preloader from "../Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingIsInProgress,
    getIsFetching,
    getTotalUsers,
    getUsersPerPage, getUsersSuper
} from "../../redux/users_selectors";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.usersPerPage ,this.currentPage);
        //debugger
    }

    openPageNumber(n) {
        this.props.getUsers(this.props.usersPerPage ,n);
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
                            (cp === p ? null : () => {
                                    this.openPageNumber(p)
                                }
                            )
                        }
                        className={cp === p ? styles.currentPage : styles.pages}
                    > {p} </span>));
                    prev_is_shown = 0;
                }

                if( ((p === cp && cp !== 1 && cp !== pages) ||
                    (p === cp-1 && cp-1 !== 1 ) ||
                    (p === cp+1 && cp+1 !== pages ) )   ){
                    out.push((<span
                        key={p}
                        onClick={
                            (cp === p ? null : () => {
                                    this.openPageNumber(p)
                                }
                            )
                        }
                        className={cp === p ? styles.currentPage : styles.pages}
                    > {p} </span>));
                    prev_is_shown = 0;
                }

                if (prev_is_shown === 1)
                out.push(' ... ');

                prev_is_shown++;
            }

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
                {out}<br/>{/*{page}<br/>{this.props.totalUsers}*/}<br/>
            </div>
        )
    }

    render() {
        //console.log('USERS')
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
                    follow={this.props.follow}

                />
            </div>

            </>

        )
    }
}

let mapStateToProps = (state) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    //debugger
    //console.log('usersContainer MSTP');
    return {
        users: getUsersSuper(state),
        usersPerPage:getUsersPerPage(state),
        totalUsers:getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsInProgress: getFollowingIsInProgress(state),

    }
}

export default compose(
    connect(mapStateToProps, {
        changeUserFollowStatus,
        setUsers,
        setTotalUsers,
        setCurrentPage,
        setFetchingStatus,
        setFollowingInProgress,
        getUsers,
        follow
    }),
    withAuthRedirect
)(UsersContainer)