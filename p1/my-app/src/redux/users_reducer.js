const CHANGE_USER_FOLLOW_STATUS = 'CHANGE_USER_FOLLOW_STATUS';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_FETCHING_STATUS = 'CHANGE_FETCHING_STATUS';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    usersList: [],
    usersPerPage: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    followingIsInProgress: []
}

const users_reducer = (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_USER_FOLLOW_STATUS:
            return {
                ...state,
                usersList: state.usersList.map(u => { // перебір масиву користувачів
                        if (u.id === action.user_id) {    // пошук по ID
                            if (action.followStatus === 1) {
                                //console.log(u.id + ' - ' + action.user_id)
                                return {
                                    ...u,   // копіюємо самого користувача
                                    followed: true  // змінюємо статус follow
                                }
                                // console.log(newU);
                            }
                            if (action.followStatus === 0) {
                                //console.log(u.id + ' - ' + action.user_id)
                                return {
                                    ...u,
                                    followed: false
                                }
                                // console.log(newU);
                            }
                        }
                        return u;
                    }
                )


            }

        // console.log(stateCopy)
        // return stateCopy
        case SET_USERS:
            // debugger
            return {
                ...state,
                // usersList: [...state.usersList, ...action.users]
                usersList: [ ...action.users]
            }
        case SET_TOTAL_USERS:
            // debugger
            return {
                ...state,
                totalUsers: action.total
            }
        case SET_CURRENT_PAGE:
            // debugger
            return {
                ...state,
                currentPage: action.currentPage
            }
        case CHANGE_FETCHING_STATUS:
            // debugger
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            // debugger
            return {
                ...state,
                followingIsInProgress: action.followingIsInProgress
                    ? [...state.followingIsInProgress, action.userId ]
                    : state.followingIsInProgress.filter(id => id !== action.userId )
            }

        default:
            return state;
        //break;

    }

}

export default users_reducer;


export const changeUserFollowStatus = (user_id, followStatus) => {
    return {type: CHANGE_USER_FOLLOW_STATUS, user_id: user_id, followStatus: followStatus};
}


export const setUsers = (users) => {
    return {type: SET_USERS, users: users};
}
export const setTotalUsers = (total) => {
    return {type: SET_TOTAL_USERS, total: total};
}
export const setCurrentPage = (currentPage) => {
    //console.log(currentPage)
    return {type: SET_CURRENT_PAGE, currentPage: currentPage};
}
export const setFetchingStatus = (isFetching) => {
    //console.log(currentPage)
    return {type: CHANGE_FETCHING_STATUS, isFetching: isFetching};
}
export const setFollowingInProgress = (followingIsInProgress,userId) => {
    //console.log(currentPage)
    return {type: FOLLOWING_IN_PROGRESS, followingIsInProgress,userId};
}


// export const newChatPostChangeActionCreator = (text) => {
//     return {type: NEW_CHAT_POST_CHANGE, changedText: text};
// }
// export const gETChatNEWPOSTTEXTActionCreator = () => {
//     return {type: GET_CHAT_NEW_POST_TEXT};
// }
