import React from 'react';
import '@testing-library/jest-dom'
import auth_reducer, {
    setUserAuthCaptchaAnswer,
    setUserAuthCaptchaImg,
    setUserAuthData,
    setUserAuthImg
} from "./auth_reducer";

let state = {
    userID: null,
    email: null,
    login: null,
    userImg: null,
    isAuth: false,
    capthaImg: null,
    captchaAnswer: null,
    loginError: null
}
// userID,email,login,isAuth,capthaImg,captchaAnswer,loginError
/*let userdata = (1,'dfgdrgr', 'rrr', true,null,null, null);

let state2 = {
    userdata
}*/


let state2 = {
    userID: 1,
    email: 'dfgdrgr',
    login: 'rrr',
    userImg: null,
    isAuth: true,
    capthaImg: null,
    captchaAnswer: null,
    loginError: null
}


it('__________ setUserAuthData is successful', () => {
    // 1 - test data
    let action = setUserAuthData(1,'dfgdrgr', 'rrr', true,null,null, null);

    // 2 - action
    let newState = auth_reducer(state, action);

    // 3 - expectation
    expect(newState.login).toBe('rrr');
});

it('__________ setUserAuthImg is successful', () => {
    // 1 - test data
    let action = setUserAuthImg({'big': 'big_img.png', 'small': 'small_img.png'});

    // 2 - action
    let newState = auth_reducer(state, action);

    // 3 - expectation
    expect(newState.userImg.small).toBe('small_img.png');
});

it('__________ setUserAuthCaptchaImg is successful', () => {
    // 1 - test data
    let action = setUserAuthCaptchaImg('captcha_img.png');

    // 2 - action
    let newState = auth_reducer(state, action);

    // 3 - expectation
    expect(newState.capthaImg).toBe('captcha_img.png');
});

it('__________ setUserAuthCaptchaAnswer is successful', () => {
    // 1 - test data
    let action = setUserAuthCaptchaAnswer('answer1');

    // 2 - action
    let newState = auth_reducer(state2, action);

    // 3 - expectation
    expect(newState.captchaAnswer).toBe('answer1');
});
