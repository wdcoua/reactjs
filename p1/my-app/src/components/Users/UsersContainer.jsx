// import React from "react";
import {connect} from "react-redux";
// import Users from "../Users/Users";
// import {addChatPostActionCreator} from "../../redux/chat_reducer";
import {changeUserFollowStatusAC, setCurrentPageAC, setTotalUsersAC, setUsersAC} from "../../redux/users_reducer";
// import User from "./UsersС";
import UserClass from "./UserClass";

let mapStateToProps = (state) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    // debugger
    return {
        users: state.users.usersList,
        usersPerPage:state.users.usersPerPage,
        totalUsers:state.users.totalUsers,
        currentPage: state.users.currentPage
    }
}
let mapDispatchToProps = (dispatch) => { // передає дочірній компоненті колбеки (функції)

    return {
        changeFollowStatus: (user_id,follow_status) => {
            dispatch(changeUserFollowStatusAC(user_id,follow_status));
        },
        setUsers:(users) => {
            // debugger
            dispatch(setUsersAC(users));
        },
        setTotalUsers:(total) => {
            // debugger
            dispatch(setTotalUsersAC(total));
        },
        setCurrentPage:(currentPage) => {
            // debugger
            dispatch(setCurrentPageAC(currentPage));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)


export default UsersContainer;