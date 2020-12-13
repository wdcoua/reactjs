import {API} from "../api/api";

const CHANGE_USER_FOLLOW_STATUS = 'CHANGE_USER_FOLLOW_STATUS';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_FETCHING_STATUS = 'CHANGE_FETCHING_STATUS';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    usersList: [],
    usersPerPage: 20,
    totalUsers: 0,
    currentPage: 30,
    isFetching: true,
    followingIsInProgress: [],
    fake: 0
}

const users_reducer = (state = initialState, action) => {

    switch (action.type) {
        case "FAKE" : return {...state, fake: state.fake + 1}
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
    //console.log('111')
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



// thunk-и
export const getUsers = (usersPerPage = 20,currentPage = 86) => {
    return (dispatch) => {

        dispatch(setFetchingStatus(true));

        dispatch(setCurrentPage(currentPage));

        //this.props.setFetchingStatus(true);
        API.getUsers( usersPerPage ,currentPage)
            .then(data => {
                // debugger
                dispatch(setFetchingStatus(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsers(data.totalCount));
                // this.props.totalUsers = resp.data.totalCount
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }
}

export const follow = (id,followToggle) => {

    return (dispatch) => {

        //dispatch(setFetchingStatus(true));


        dispatch(setFollowingInProgress(true, id));

        if(followToggle){ // follow


            API.follow( id)
                .then(data => {
                    // debugger
                    if(data.resultCode === 0){ // чи потрібно?

                        //props.setFetchingStatus(false);
                        dispatch(changeUserFollowStatus(id, 1));
                        dispatch(setFollowingInProgress(false, id));


                        //props.setUsers(resp.data.items)
                        //props.setTotalUsers(resp.data.totalCount)
                        // props.totalUsers = resp.data.totalCount
                        console.log(data)
                        //console.log('ffffff')
                    }else{
                        // error
                    }
                })

                .catch(error => {
                    console.warn(error);
                });
        }else{ // unfollow
            API.unfollow( id)
                .then(resp => {
                    // debugger
                    //props.setFetchingStatus(false);
                    dispatch(changeUserFollowStatus(id, 0));
                    dispatch(setFollowingInProgress(false, id));


                    //props.setUsers(resp.data.items)
                    //props.setTotalUsers(resp.data.totalCount)
                    // props.totalUsers = resp.data.totalCount
                    console.log(resp)
                })

                .catch(error => {
                    console.warn(error);
                });
        }

    }
}


// export const newChatPostChangeActionCreator = (text) => {
//     return {type: NEW_CHAT_POST_CHANGE, changedText: text};
// }
// export const gETChatNEWPOSTTEXTActionCreator = () => {
//     return {type: GET_CHAT_NEW_POST_TEXT};
// }
