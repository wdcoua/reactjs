import {API} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

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

// thunk-и

export const getProfile = (id) => {
    return (dispatch) => {

        API.getProfile(!id ? 11583 : id)
            .then(resp => {
                //console.log('data = ' + data)
                dispatch(setUserProfile(resp.data));
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
                //const {resultCode} = data;
                //if(resultCode === 0 || resultCode === undefined){ // експериментально
                    dispatch(setUserStatus(data));
                //}

            })

            .catch(error => {
                console.warn(error);
            });
    }
}

export const setStatus = (status) => {
    console.log('setStatus - ' + status)
    return (dispatch) => {

        API.setStatus(status)
            .then(data => {
                dispatch(setUserStatus(status));
            })

            .catch(error => {
                console.warn(error);
            });
    }
}

export const updateProfile = () => {
    console.log('updateProfile - ' )
    return (dispatch) => {

        API.updateProfile()
            .then(data => {
                //dispatch(setUserStatus(status));
                console.log('updateProfile + ' + data.resultCode)
                console.log('updateProfile + ' + data.data)
            })

            .catch(error => {
                console.warn(error);
            });
    }
}