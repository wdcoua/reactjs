import {API} from "../api/api";
import {stopSubmit} from "redux-form";
import {settingMainError} from "./app_reducer";
// import {checkAuthorization, setUserAuthCaptchaImg} from "./auth_reducer";
// import {getExamples} from "./examples_reducer";
// import {setInitialized} from "./app_reducer";

const SET_USER_PROFILE = 'samurai_project/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'samurai_project/profile/SET_USER_STATUS';
const UPD_USER_PHOTOS = 'samurai_project/auth/UPD_USER_PHOTOS';
const SET_PROFILE_UPDATED = 'samurai_project/auth/SET_PROFILE_UPDATED';

let initialState = {
    profile: null,
    status: "",
    profileUpdatedToggle: false
}

const profile_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_PROFILE:
            //console.log('reduser ' + action.profile)
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:

            return {
                ...state,
                status: action.status
            }
        case UPD_USER_PHOTOS:

            return {
                ...state,
                profile: {...state.profile,
                photos: action.photos},
            }
        case SET_PROFILE_UPDATED:

            return {
                ...state,
                profileUpdatedToggle: action.status,
            }

        default:
            return state;
        //break;

    }

}

export default profile_reducer;


export const setUserProfile = (profileData) => {
    let profile = profileData.data;
    return {type: SET_USER_PROFILE, profile};
}
export const setProfileUpdated = (status) => {
    return {type: SET_PROFILE_UPDATED, status};
}
export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status};
}
/*export const updateProfilePhoto2 = (photo) => {
    return {type: SET_USER_STATUS, photo};
}*/
export const updateProfilePhotos = (photosData) => {
    let photos = photosData.data.photos
    return {type: UPD_USER_PHOTOS, photos};
}



/***** helpers *****/
const dispatcher = async (dispatch,promises = [],functions = [],text = '') => {
    await Promise.all(promises)
        .then( () => {
            promises.map(p => {
                if ((p.status || p.statusText) && p.status > 399)
                    dispatch(settingMainError(text + p.status + ' ' + p.statusText));
                else{
                    functions.map(f => {
                        dispatch(f(p));
                    })
                }

            })

        })
}

const deCapitalizeFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

const parseErrors = (e) => {
    let erObj = {};
    e.map((er)=> {
        let re = /(.*)\((.*)\)/i;
        let found = er.match(re);
        if(found !== null && found[0].length > 0){ // if found anything
            let re2 = /\-\>(.*)/
            let found2 = found[2].match(re2);
            if(found2 !== null && found2[1].length > 0){ // if found arrow
                // console.log(deCapitalizeFirstLetter(found2[1]))
                let name = deCapitalizeFirstLetter(found2[1])
                erObj[name]= found[1];
            }else{
                // console.log(deCapitalizeFirstLetter(found[2]))
                let name = deCapitalizeFirstLetter(found[2])
                erObj[name] = found[1];
            }

        }
    })
    return erObj;
}

// thunk-и

export const getProfile = (id) => async (dispatch,getState) => {

    const userId = getState().auth.userID;

    //console.log('thunk - ' + id)
    let promise = await API.getProfile(!id ? userId : id);
    await dispatcher(dispatch,[promise],[setUserProfile],'Ошибка получения профиля');
    // await Promise.all([promise])
    //     .then( () => {
    //         if (promise.status || promise.statusText)
    //             dispatch(settingMainError('Ошибка получения профиля - ' + promise.status + ' ' + promise.statusText));
    //         else
    //             dispatch(setUserProfile(promise.data));
    //  })
    //
    // .catch(error => {
    //     console.warn(error);
    // });

}

export const getStatus = (id) => async (dispatch,getState) => {
    const userId = getState().auth.userID;
    let promise = await API.getStatus(!id ? userId : id);
    await dispatcher(dispatch,[promise],[setUserStatus],'Ошибка получения статуса - ');
    // await Promise.all([promise])
    //     .then( () => {
    //         if (promise.status || promise.statusText)
    //             dispatch(settingMainError('Ошибка получения статуса - ' + promise.status + ' ' + promise.statusText));
    //         else
    //             dispatch(setUserStatus(promise));
    //     })
    // .then(data => {
    //const {resultCode} = data;
    //if(resultCode === 0 || resultCode === undefined){ // експериментально
    //}

    // })
    //
    // .catch(error => {
    //     console.warn(error);
    // });

}

/*export const updateProfilePhoto = (photo) => async (dispatch) => {
    let data = await API.updateProfilePhoto(photo);
    dispatch(setUserStatus(data));
}*/


export const updateProfilePhoto = (photoFile) => async (dispatch) => {
    // await API.updateProfilePhoto(photoFile)
    // console.warn(photoFile);
    let promise = await API.updateProfilePhoto(photoFile);
    await dispatcher(dispatch,[promise],[updateProfilePhotos],'Ошибка установки фото профиля - ');
    // await Promise.all([promise])
    //     .then( () => {
    //         if(promise.status || promise.statusText)
    //             dispatch(settingMainError('Ошибка установки фото профиля - ' + promise.status + ' ' + promise.statusText));
    //         else
    //             dispatch(updateProfilePhotos(promise.data.photos));
    //     })
    // console.warn(out);
    //dispatch(setUserLogOut());

}


export const setStatus = (status) => async (dispatch) => {
    let promise = await API.setStatus(status)
    await dispatcher(dispatch,[promise],[],'Ошибка установки статуса - ')
        .then(()=>{
            dispatch(setUserStatus(status));
        });


    // await Promise.all([promise])
    //     .then( () => {
    //         // console.log(promise1.status)
    //         // console.log(promise1.statusText)
    //
    //         if(promise.status || promise.statusText)
    //             dispatch(settingMainError('Ошибка установки статуса - ' + promise.status + ' ' + promise.statusText));
    //         else
    //             dispatch(setUserStatus(status));
    //     })
        // .catch((err)=>{ // no need
        //     dispatch(settingMainError('Ошибка установки статуса'));
        // })
}

export const updateProfile = (profileObj) => async (dispatch,getState) => {

    console.log('updateProfile - 1')
    console.log(profileObj)
    const userId = getState().auth.userID;
    // console.log('updateProfile - 2')

    let promise = await API.updateProfile(profileObj);
    await Promise.all([promise])
        .then( () => {
            // console.log(promise1.status)
            // console.log(promise1.statusText)

            if ((promise.status || promise.statusText) && promise.status > 399)
                dispatch(settingMainError('Ошибка обновления профиля - ' + promise.status + ' ' + promise.statusText));
            else {

                if (promise.resultCode === 0) {
                    // console.log('updateProfile +')
                    // dispatch(checkAuthorization());
                    //  dispatch(getProfile(profileObj.userId));

                    dispatch(getProfile(userId));
                    dispatch(setProfileUpdated(true));
                    //
                    // let data = await Promise.all([promise1,promise2])
                    //     .then( () => {
                    //         console.log('finita')
                    //     })

                } else {
                    //dispatch(setUserAuthError(data.messages.join('<br/>')));

                    /*
                            let str = 'Invalid url format (Contacts->Facebook)';
                            let re = /\((.*)\)/i;
                            let found = str.match(re);
                            if(found !== null && found[0].length > 0){
                                let re2 = /\-\>(.*)\)/
                                let found2 = found[0].match(re2);
                                if(found2 !== null && found2[1].length > 0){
                                    console.log(found2[1].toLowerCase())
                                }else{
                                    console.log(found[1].toLowerCase())
                                }

                            }*/


                    // console.log(data.messages)
                    let errObj = parseErrors(promise.messages);
                    // console.log(testObj)
                    // dispatch(stopSubmit('profileEdit', {_error: data.messages.join('|||')}));
                    // dispatch(stopSubmit('profileEdit', {'instagram': data.messages[0],'vk': data.messages[1]}));
                    dispatch(stopSubmit('profileEdit', errObj));
                    // return Promise.reject(data.messages.join('|||'));
                    // dispatch(stopSubmit('profileEdit', {}));
                    /*
                            if (data.resultCode === 10) {
                                let data = await API.getCaptcha();
                                dispatch(setUserAuthCaptchaImg(data.url));
                                // todo зробити виведення помилок - а треба?
                            }*/
                }
            }
        })
    // .then(data => {
    //dispatch(setUserStatus(status));
    // console.log('updateProfile + ' + data.resultCode)
    // console.log('updateProfile + ' + data.data)
    // console.log(data)



    // })
    //
    // .catch(error => {
    //     console.warn(error);
    // });

}