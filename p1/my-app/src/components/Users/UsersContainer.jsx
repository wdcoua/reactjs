// import React from "react";
import {connect} from "react-redux";
import Users from "../Users/Users";
// import {addChatPostActionCreator} from "../../redux/chat_reducer";
import {changeUserFollowStatusAC, setUsersAC} from "../../redux/users_reducer";

let mapStateToProps = (state) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    // debugger
    return {
        users: state.users.usersList,
    }
}
let mapDispatchToProps = (dispatch) => { // передає дочірній компоненті колбеки (функції)

    return {
        changeFollowStatus: (user_id,follow_status) => {
            dispatch(changeUserFollowStatusAC(user_id,follow_status));
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;