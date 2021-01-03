import {API} from "../api/api";
import {stopSubmit} from "redux-form";
import {setUserProfile, setUserStatus} from "./profile_reducer";

const SET_USER_DATA = 'samurai_project/auth/SET_USER_DATA';
const SET_USER_IMG = 'samurai_project/auth/SET_USER_IMG';
const SET_CAPTCHA_IMG = 'samurai_project/auth/SET_CAPTCHA_IMG';
const SET_CAPTCHA_ANS = 'samurai_project/auth/SET_CAPTCHA_ANS';
//const SET_ERROR = 'SET_ERROR';

let initialState = {
    userID: null,
    email: null,
    login: null,
    userImg: null,
    isAuth: false,
    capthaImg: null,
    captchaAnswer: null,
    loginError: null
}

const auth_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        /*case LOG_OUT:
            return {
                ...state,
                isAuth: false
            }*/

        case SET_USER_IMG:
            return {
                ...state,
                userImg: action.img
            }

        case SET_CAPTCHA_IMG:
            return {
                ...state,
                capthaImg: action.img
            }
        case SET_CAPTCHA_ANS:
            return {
                ...state,
                captchaAnswer: action.ans
            }
        /*        case SET_ERROR:
                    return {
                        ...state,
                        loginError:action.err
                    }*/


        default:
            return state;

    }

}

export default auth_reducer;

export const setUserAuthData = (userID, email, login, isAuth, capthaImg, captchaAnswer, loginError) => {
    return {type: SET_USER_DATA, payload: {userID, email, login, isAuth, capthaImg, captchaAnswer, loginError}};
}

/*export const setUserLogOut = () => {
    return {type: LOG_OUT};
}*/

export const setUserAuthImg = (img) => { /* not used */
    return {type: SET_USER_IMG, img};
}
export const setUserAuthCaptchaImg = (img) => {
    return {type: SET_CAPTCHA_IMG, img};
}
export const setUserAuthCaptchaAnswer = (ans) => {
    return {type: SET_CAPTCHA_ANS, ans};
}
/*export const setUserAuthError = (err) => {
    return {type: SET_ERROR, err};
}*/

// thunk-и

export const checkAuthorization = () => async (dispatch) => {

    let data = await API.authMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserAuthData(id, email, login, true, null, null, null));
        let resp2 = await API.getProfile(id);
        dispatch(setUserProfile(resp2.data));
        let data2 = await API.getStatus(id);
        dispatch(setUserStatus(data2));
    }
}


export const logOut = () => async (dispatch) => {
    await API.logOut()
    console.warn('logout2');
    //dispatch(setUserLogOut());
    dispatch(setUserAuthData(null, null, null, false, null, null, null));

}


export const login = (email, pass, remember, captcha) => async (dispatch) => {
    let data = await API.auth(email, pass, remember, captcha);
    console.log(data)
    if (data.resultCode === 0) {
        console.log('login +')
        dispatch(checkAuthorization());

    } else {
        //dispatch(setUserAuthError(data.messages.join('<br/>')));

        dispatch(stopSubmit('auth', {_error: data.messages.join('<br/>')}));

        if (data.resultCode === 10) {
            let data = await API.getCaptcha();
                    dispatch(setUserAuthCaptchaImg(data.url));
            // todo зробити виведення помилок - а треба?
        }
    }


}