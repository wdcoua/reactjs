import {connect} from "react-redux";
import {
    setFetchingStatus,
    changeUserFollowStatus,
    setCurrentPage,
    setTotalUsers,
    setUsers, setFollowingInProgress, getUsers, follow
} from "../../redux/users_reducer";
import React, {useEffect} from "react";
// import styles from "./User/User.module.css";
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
import Pagination from "../Pagination/Pagination"
import Pagination2 from "../Pagination/Pagination2";

const UsersContainer = ({isFetching,users,changeUserFollowStatus,setFetchingStatus,
                            setFollowingInProgress,followingIsInProgress,follow,totalUsers,usersPerPage,currentPage,getUsers}) => {
    useEffect(() => {
        getUsers(usersPerPage ,currentPage);
        // console.log('currrr - ' + currentPage)
    },[usersPerPage,currentPage]);

/*
    const componentDidMount = () => {
        // let {usersPerPage,currentPage} = props;
        getUsers(usersPerPage ,currentPage);
        //debugger
    }*/

    const openPageNumber = (n) => {
        // let {usersPerPage} = props;
        getUsers(usersPerPage ,n);
    }


    return <>
        {isFetching ? <Preloader /> : null}
        <div>

            <Pagination2
                totalUsers={totalUsers}
                usersPerPage={usersPerPage}
                currentPage={currentPage}
                openPageNumber={openPageNumber}

            />

            <Users
                users={users}
                // showPages={showPages}
                changeUserFollowStatus={changeUserFollowStatus}
                setFetchingStatus={setFetchingStatus}
                setFollowingInProgress={setFollowingInProgress}
                followingIsInProgress={followingIsInProgress}
                follow={follow}

            />

            <Pagination
                totalUsers={totalUsers}
                usersPerPage={usersPerPage}
                currentPage={currentPage}
                openPageNumber={openPageNumber}

            />
        </div>

    </>
}
/*

class UsersContainer extends React.Component {

    componentDidMount = () => {
        let {usersPerPage,currentPage} = this.props;
        this.props.getUsers(usersPerPage ,currentPage);
        //debugger
    }

    openPageNumber = (n) => {
        let {usersPerPage} = this.props;
        this.props.getUsers(usersPerPage ,n);
    }




    render() {
        //console.log('USERS')

        let {isFetching,users,changeUserFollowStatus,setFetchingStatus,
            setFollowingInProgress,followingIsInProgress,follow,totalUsers,usersPerPage,currentPage} = this.props;
        // debugger
        return ( <>
                {isFetching ? <Preloader /> : null}
            <div>

                <Pagination
                    totalUsers={totalUsers}
                    usersPerPage={usersPerPage}
                    currentPage={currentPage}
                    openPageNumber={this.openPageNumber}

                />

                <Users
                    users={users}
                    showPages={this.showPages}
                    changeUserFollowStatus={changeUserFollowStatus}
                    setFetchingStatus={setFetchingStatus}
                    setFollowingInProgress={setFollowingInProgress}
                    followingIsInProgress={followingIsInProgress}
                    follow={follow}

                />
            </div>

            </>

        )
    }
}
*/

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