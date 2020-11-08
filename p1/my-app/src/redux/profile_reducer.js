import {API} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    profile: null
    // usersList: [],
    // usersPerPage: 5,
    // totalUsers: 0,
    // currentPage: 1,
    // isFetching: true
}

const profile_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
        //break;

    }

}

export default profile_reducer;


export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
}
export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status};
}

// thunk-и

export const getProfile = (id) => {
    return (dispatch) => {

        API.getProfile(!id ? 11583 : id)
            .then(data => {
                // debugger
                // this.props.setFetchingStatus(false);
                dispatch(setUserProfile(data));
                // this.props.setTotalUsers(resp.data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }
}

export const getStatus = (id) => {
    return (dispatch) => {

        API.getStatus(!id ? 11583 : id)
            .then(data => {
                // debugger
                // this.props.setFetchingStatus(false);
                dispatch(setUserStatus(data));
                // this.props.setTotalUsers(resp.data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }
}

export const setStatus = (status) => {
    return (dispatch) => {

        API.setStatus(status)
            .then(data => {
                // debugger
                // this.props.setFetchingStatus(false);
                dispatch(setUserStatus(data));
                // this.props.setTotalUsers(resp.data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }
}