
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userID: null,
    email: null,
    login: null,
}

const auth_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }


        default:
            return state;

    }

}

export default auth_reducer;


export const setUserData = (userID,email,login) => {
    return {type: SET_USER_DATA, data: {userID,email,login}};
}

