import {API} from "../api/api";

const SET_USER_PROFILE = 'samurai_project/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'samurai_project/profile/SET_USER_STATUS';

let initialState = {
    profile: null,
    status: ""
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
export const updateProfilePhoto2 = (photo) => {
    return {type: SET_USER_STATUS, photo};
}

// thunk-и

export const getProfile = (id) => async (dispatch) => {

    let resp = await API.getProfile(!id ? 11583 : id);
    // .then(resp => {
    //console.log('data = ' + data)
    dispatch(setUserProfile(resp.data));
    // })
    //
    // .catch(error => {
    //     console.warn(error);
    // });

}

export const getStatus = (id) => async (dispatch) => {

    let data = await API.getStatus(!id ? 11583 : id);
    // .then(data => {
    //const {resultCode} = data;
    //if(resultCode === 0 || resultCode === undefined){ // експериментально
    dispatch(setUserStatus(data));
    //}

    // })
    //
    // .catch(error => {
    //     console.warn(error);
    // });

}

export const updateProfilePhoto = (photo) => async (dispatch) => {

    let data = await API.updateProfilePhoto(photo);
    dispatch(setUserStatus(data));


}

export const setStatus = (status) => async (dispatch) => {
    console.log('setStatus - ' + status)

    let data = await API.setStatus(status)
    // .then(data => {
    dispatch(setUserStatus(status));
    // })
    //
    // .catch(error => {
    //     console.warn(error);
    // });

}

export const updateProfile = () => async (dispatch) => {
    console.log('updateProfile - ')

    let data = await API.updateProfile();
    // .then(data => {
    //dispatch(setUserStatus(status));
    console.log('updateProfile + ' + data.resultCode)
    console.log('updateProfile + ' + data.data)
    // })
    //
    // .catch(error => {
    //     console.warn(error);
    // });

}