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

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPerPage ,this.currentPage);
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
                        className={cp === p ? styles.currentPage : /*'' + ' ' +*/ styles.pages}
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
                        className={cp === p ? styles.currentPage : /*'' + ' ' +*/ styles.pages}
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
                    follow={this.props.follow}

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
        followingIsInProgress: state.users.followingIsInProgress,

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