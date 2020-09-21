const CHANGE_USER_FOLLOW_STATUS = 'CHANGE_USER_FOLLOW_STATUS';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    usersList: [],
    usersPerPage: 5,
    totalUsers: 0,
    currentPage: 1
}

const users_reducer = (state = initialState, action) => {

    switch (action.type) {

        // case ADD_CHAT_POST:
        //     let newChatPost = {
        //         id: 8,
        //         author: 'Котигорошко',
        //         authorAva: '/src/kotigoroshko.jpg',
        //         text: state.newChatPostText,
        //         date: '15:25 17-09-2020'
        //     }
        //     return {
        //         ...state,
        //         chatPosts: [...state.chatPosts,newChatPost],
        //         newChatPostText: ''
        //     }
        //
        //
        case CHANGE_USER_FOLLOW_STATUS:
            // console.log(state)
            // return state;

            // debugger
            return {
                ...state,


                // usersList: [...state.usersList]
                // usersList: state.usersList.map(u => {
                //     if (u.id === action.user_id) {
                //         return {
                //             ...u,
                //             followed: true
                //         }
                //     }
                //     return u;
                // })


                usersList: state.usersList.map(u => { // перебір масиву користувачів
                        // console.log('u - ' + u.id)
                        // console.log(u)
                    // debugger
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

        default:
            return state;
        //break;

    }

}

export default users_reducer;


export const changeUserFollowStatusAC = (user_id, followStatus) => {
    return {type: CHANGE_USER_FOLLOW_STATUS, user_id: user_id, followStatus: followStatus};
}


export const setUsersAC = (users) => {
    return {type: SET_USERS, users: users};
}
export const setTotalUsersAC = (total) => {
    return {type: SET_TOTAL_USERS, total: total};
}
export const setCurrentPageAC = (currentPage) => {
    console.log(currentPage)
    return {type: SET_CURRENT_PAGE, currentPage: currentPage};
}


// export const newChatPostChangeActionCreator = (text) => {
//     return {type: NEW_CHAT_POST_CHANGE, changedText: text};
// }
// export const gETChatNEWPOSTTEXTActionCreator = () => {
//     return {type: GET_CHAT_NEW_POST_TEXT};
// }
