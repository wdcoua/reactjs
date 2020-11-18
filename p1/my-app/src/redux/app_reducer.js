import {checkAuthorization} from "./auth_reducer";
import {getGbPosts} from "./gb_reducer";
import {getUsers} from "./users_reducer";
import {getExamples} from "./examples_reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';
//const SET_ERROR = 'SET_ERROR';

let initialState = {
    initialized: false
}

const app_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }



        default:
            return state;

    }

}

export default app_reducer;

export const setInitialized = () => {
    return {type: SET_INITIALIZED};
}


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(checkAuthorization())
    let promise2 = dispatch(getGbPosts())
    let promise3 = dispatch(getUsers())
    let promise4 = dispatch(getExamples())
    Promise.all([promise,promise2,promise3,promise4])
    .then( () => {
        dispatch(setInitialized())
    })


}


// thunk-и
//
// export const checkAuthorization = () => {
//     return (dispatch) => {
//
//         API.authMe()
//             .then(data => {
//                 if(data.resultCode === 0){
//                     let {id, login, email} = data.data;
//                     dispatch(setUserAuthData(id,email,login,true,null,null,null));
//                     API.getProfile(id)
//                         .then(data => {
//                             if(data.resultCode === 0){
//                                 dispatch(setUserAuthImg(data.photos.small))
//                             }
//                         })
//                         .catch(error => {
//                             console.warn(error);
//                         });
//                 }
//             })
//             .catch(error => {
//                 console.warn(error);
//             });
//     }
// }
//
//
// export const logOut = () => {
//     return (dispatch) => {
//         API.logOut()
//             .then(() => {
//                 console.warn('logout2');
//                 //dispatch(setUserLogOut());
//                 dispatch(setUserAuthData(null,null,null,false,null,null,null));
//
//             })
//             .catch(error => {
//                 console.warn(error);
//             });
//     }
// }
//
// export const login = (email,pass,remember,captcha) => {
//     return (dispatch) => {
//         API.auth(email,pass,remember,captcha)
//             .then(data => {
//                 console.log(data)
//                 if(data.resultCode === 0){
//                     console.log('login +')
//                     dispatch(checkAuthorization());
//                     /*API.authMe()
//                         .then(data => {
//                             if(data.resultCode === 0){
//                                 let {id, login, email} = data.data;
//                                 dispatch(setUserAuthData(id,email,login));
//                                 API.getProfile(id)
//                                     .then(data => {
//                                         if(data.resultCode === 0){
//                                             dispatch(setUserAuthImg(data.photos.small))
//                                         }
//                                     })
//                                     .catch(error => {
//                                         console.warn(error);
//                                     });
//                             }
//                         })
//
//                         .catch(error => {
//                             console.warn(error);
//                         });*/
//                 }else
//                 {
//                     //dispatch(setUserAuthError(data.messages.join('<br/>')));
//
//                     dispatch(stopSubmit('auth',{_error: data.messages.join('<br/>')}));
//
//                     if(data.resultCode === 10){
//                         API.getCaptcha()
//                             .then(data => {
//                                 dispatch(setUserAuthCaptchaImg(data.url))
//                             })
//                             .catch(error => {
//                                 console.warn(error);
//                             });
//
//                         // todo зробити виведення помилок
//                     }
//                 }
//
//             })
//             .catch(error => {
//                 console.warn(error);
//             });
//
//     }
// }