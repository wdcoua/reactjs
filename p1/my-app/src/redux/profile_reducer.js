import {API} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

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

        default:
            return state;
        //break;

    }

}

export default profile_reducer;


export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
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