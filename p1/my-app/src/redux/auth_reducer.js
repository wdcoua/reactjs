import {API} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_IMG = 'SET_USER_IMG';

let initialState = {
    userID: null,
    email: null,
    login: null,
    userImg: null,
    isAuth: false
}

const auth_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_USER_IMG:
            return {
                ...state,
                ...action.img
            }


        default:
            return state;

    }

}

export default auth_reducer;


export const setUserAuthData = (userID,email,login) => {
    return {type: SET_USER_DATA, data: {userID,email,login}};
}

export const setUserAuthImg = (img) => {
    return {type: SET_USER_IMG, img};
}

// thunk-и

export const checkAuthorization = () => {
    return (dispatch) => {

        API.authMe()
            .then(data => {
                // debugger
                if(data.resultCode === 0){
                    let {id, login, email} = data.data;
                    dispatch(setUserAuthData(id,email,login));

                    API.getProfile(id)
                        .then(data => {
                            // debugger
                            if(data.resultCode === 0){
                                // let {id, login, email} = resp.data.data;
                                dispatch(setUserAuthImg(data.photos.small))
                            }

                            // console.log(resp)
                        })

                        .catch(error => {
                            console.warn(error);
                        });

                }

                // console.log(resp)
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
                if(data.resultCode === 0){
                    console.log('login +')
                    API.authMe()
                        .then(data => {
                            // debugger
                            if(data.resultCode === 0){
                                let {id, login, email} = data.data;
                                dispatch(setUserAuthData(id,email,login));

                                API.getProfile(id)
                                    .then(data => {
                                        // debugger
                                        if(data.resultCode === 0){
                                            // let {id, login, email} = resp.data.data;
                                            dispatch(setUserAuthImg(data.photos.small))
                                        }

                                        // console.log(resp)
                                    })

                                    .catch(error => {
                                        console.warn(error);
                                    });

                            }

                            // console.log(resp)
                        })

                        .catch(error => {
                            console.warn(error);
                        });
                }else{
                    // todo зробити виведення помилок
                }
            })
            .catch(error => {
                console.warn(error);
            });

    }
}