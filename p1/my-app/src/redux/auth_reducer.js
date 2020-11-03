
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

