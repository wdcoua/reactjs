import {API} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const CHANGE_USER_FOLLOW_STATUS = 'samurai_project/users/CHANGE_USER_FOLLOW_STATUS';
const SET_USERS = 'samurai_project/users/SET_USERS';
const SET_INITIAL = 'samurai_project/users/SET_INITIAL';
const SET_PAGE_WITH_ME = 'samurai_project/users/SET_PAGE_WITH_ME';
const SET_TOTAL_USERS = 'samurai_project/users/SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'samurai_project/users/SET_CURRENT_PAGE';
const CHANGE_FETCHING_STATUS = 'samurai_project/users/CHANGE_FETCHING_STATUS';
const FOLLOWING_IN_PROGRESS = 'samurai_project/users/FOLLOWING_IN_PROGRESS';

let initialState = {
    usersList: [],
    usersPerPage: 20,
    totalUsers: 0,
    currentPage: 30,
    isFetching: true,
    followingIsInProgress: [],
    fake: 0,
    initial: 1,
    pageWithMe: 0,
    myId: 11583
}

const users_reducer = (state = initialState, action) => {

    switch (action.type) {
        case "FAKE" :
            return {...state, fake: state.fake + 1}
        case CHANGE_USER_FOLLOW_STATUS:
            return {
                ...state,
                usersList: updateObjectInArray(state.usersList,action.user_id, 'id', {followed: (action.followStatus === 1)} )
                /*
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
*/

            }

        // console.log(stateCopy)
        // return stateCopy
        case SET_USERS:
            return {
                ...state,
                usersList: [...action.users]
            }
        case SET_PAGE_WITH_ME:
            return {
                ...state,
                pageWithMe: action.pageWithMe
            }
        case SET_INITIAL:
            return {
                ...state,
                initial: action.initial
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
                    ? [...state.followingIsInProgress, action.userId]
                    : state.followingIsInProgress.filter(id => id !== action.userId)
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
export const setPageWithMe = (pageWithMe) => {
    return {type: SET_PAGE_WITH_ME, pageWithMe: pageWithMe};
}
export const setInitial = (initial) => {
    return {type: SET_INITIAL, initial: initial};
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
export const setFollowingInProgress = (followingIsInProgress, userId) => {
    //console.log(currentPage)
    return {type: FOLLOWING_IN_PROGRESS, followingIsInProgress, userId};
}


// thunk-и
// export const getUsers = (usersPerPage = 20, currentPage = 229) => async (dispatch) => {
export const getUsers = (usersPerPage = 20, currentPage  = 0) => async (dispatch) => {

    // console.log('curpage__reducer = ' + currentPage)
    dispatch(setFetchingStatus(true));

    if(currentPage === 0){
        currentPage = 1;
    }else{
        dispatch(setCurrentPage(currentPage));
    }
    /*
    if(initial === 1){
        // first request to get to know total and calculate current page with ME
        dispatch(setInitial(2));
    }else if(initial === 2){
        // second request to get current page with ME
        dispatch(setInitial(0));
    }else{
        // all other requests - if page is set - get that page, else get page with ME
        // every time calculate page with ME
    }
    */

    //this.props.setFetchingStatus(true);
    let data = await API.getUsers(usersPerPage, currentPage);
    // .then(data => {
    // debugger

    // if(currentPage === 255){
    //     data = await API.getUsers(usersPerPage, currentPage, data.totalCount);
    // }

    dispatch(setFetchingStatus(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
    // console.log('cp - '+data.cp)



    // dispatch(setInitial(initial));
    // dispatch(setPageWithMe(2));


    // this.props.totalUsers = resp.data.totalCount
    // console.log(resp)
    // })
    //
    // .catch(error => {
    //     console.warn(error);
    // });

}

export const follow = (id, followToggle) => async (dispatch) => {

    //dispatch(setFetchingStatus(true));


    dispatch(setFollowingInProgress(true, id));

    if (followToggle) { // follow


        let data = await API.follow(id);
        // .then(data => {
        // debugger
        if (data.resultCode === 0) { // чи потрібно?

            //props.setFetchingStatus(false);
            dispatch(changeUserFollowStatus(id, 1));
            dispatch(setFollowingInProgress(false, id));


            //props.setUsers(resp.data.items)
            //props.setTotalUsers(resp.data.totalCount)
            // props.totalUsers = resp.data.totalCount
            console.log(data)
            //console.log('ffffff')
        } else {
            // error
        }
        // })
        //
        // .catch(error => {
        //     console.warn(error);
        // });
    } else { // unfollow
        let resp = await API.unfollow(id)
        // .then(resp => {
        // debugger
        //props.setFetchingStatus(false);
        dispatch(changeUserFollowStatus(id, 0));
        dispatch(setFollowingInProgress(false, id));


        //props.setUsers(resp.data.items)
        //props.setTotalUsers(resp.data.totalCount)
        // props.totalUsers = resp.data.totalCount
        console.log(resp)
        // })
        //
        // .catch(error => {
        //     console.warn(error);
        // });
    }


}


// export const newChatPostChangeActionCreator = (text) => {
//     return {type: NEW_CHAT_POST_CHANGE, changedText: text};
// }
// export const gETChatNEWPOSTTEXTActionCreator = () => {
//     return {type: GET_CHAT_NEW_POST_TEXT};
// }
