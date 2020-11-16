import {API} from "../api/api";
import {stopSubmit} from "redux-form";
import {setUserProfile, setUserStatus} from "./profile_reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_IMG = 'SET_USER_IMG';
const SET_CAPTCHA_IMG = 'SET_CAPTCHA_IMG';
const SET_CAPTCHA_ANS = 'SET_CAPTCHA_ANS';
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
                ...action.img
            }

        case SET_CAPTCHA_IMG:
            return {
                ...state,
                capthaImg:action.img
            }
        case SET_CAPTCHA_ANS:
            return {
                ...state,
                captchaAnswer:action.answer
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

export const setUserAuthData = (userID,email,login,isAuth,capthaImg,captchaAnswer,loginError) => {
    return {type: SET_USER_DATA, payload: {userID,email,login,isAuth,capthaImg,captchaAnswer,loginError}};
}

/*export const setUserLogOut = () => {
    return {type: LOG_OUT};
}*/

export const setUserAuthImg = (img) => {
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

export const checkAuthorization = () => (dispatch) => {

    return API.authMe()
            .then(data => {
                if(data.resultCode === 0){
                    let {id, login, email} = data.data;
                    dispatch(setUserAuthData(id,email,login,true,null,null,null));
                    API.getProfile(id)
                        .then(resp => {
                            //debugger
                            //if(resp.resultCode === 0){

                                dispatch(setUserProfile(resp.data));
                                //dispatch(setUserAuthImg(data.photos.small))
                            //}
                        })
                        .catch(error => {
                            console.warn(error);
                        });

                    API.getStatus(id)
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
            })
            .catch(error => {
                console.warn(error);
            });
}


export const logOut = () => {
    return (dispatch) => {
        API.logOut()
            .then(() => {
                console.warn('logout2');
                //dispatch(setUserLogOut());
                dispatch(setUserAuthData(null,null,null,false,null,null,null));

            })
            .catch(error => {
                console.warn(error);
            });
    }
}

export const login = (email,pass,remember,captcha) => {
    return (dispatch) => {
        API.auth(email,pass,remember,captcha)
            .then(data => {
                console.log(data)
                if(data.resultCode === 0){
                    console.log('login +')
                    dispatch(checkAuthorization());
                    /*API.authMe()
                        .then(data => {
                            if(data.resultCode === 0){
                                let {id, login, email} = data.data;
                                dispatch(setUserAuthData(id,email,login));
                                API.getProfile(id)
                                    .then(data => {
                                        if(data.resultCode === 0){
                                            dispatch(setUserAuthImg(data.photos.small))
                                        }
                                    })
                                    .catch(error => {
                                        console.warn(error);
                                    });
                            }
                        })

                        .catch(error => {
                            console.warn(error);
                        });*/
                }else
                {
                    //dispatch(setUserAuthError(data.messages.join('<br/>')));

                    dispatch(stopSubmit('auth',{_error: data.messages.join('<br/>')}));

                    if(data.resultCode === 10){
                        API.getCaptcha()
                            .then(data => {
                                dispatch(setUserAuthCaptchaImg(data.url))
                            })
                            .catch(error => {
                                console.warn(error);
                            });

                        // todo зробити виведення помилок
                    }
                }

            })
            .catch(error => {
                console.warn(error);
            });

    }
}