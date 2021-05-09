import React from 'react';
import '@testing-library/jest-dom'
import profile_reducer, {setProfileUpdated, setUserProfile, setUserStatus, updateProfilePhoto} from "./profile_reducer";
import kot from "../images/kotigoroshko.jpg"


let state = {
    profile: null,
    status: "",
    profileUpdatedToggle: false
}

let profile = {
    'login':'test',
    'id': 15
}

let profile2 = {
    "userId": 11583,
    "aboutMe": "Димыч, курсы - агонь!!!",
    "contacts": {
        "facebook": "test.com/test5",
        "github": "test.com/test",
        "instagram": "test.com/test1",
        "mainLink": "test.com/test",
        "twitter": "test.com/test",
        "vk": "vk.com/test1",
        "website": "test.com/test",
        "youtube": "yt.com/test"
    },
    "lookingForAJob": false,
    "lookingForAJobDescription": "уже есть",
    "fullName": "WD"
}

it('----   set profileUpdatedToggle TRUE is successful', () => {
    // 1 - test data
    let action = setProfileUpdated(true);

    // 2 - action
    let newState = profile_reducer(state, action);

    // 3 - expectation
    expect(newState.profileUpdatedToggle).toBe(true);
});

it('----   set profileUpdatedToggle FALSE is successful', () => {
    // 1 - test data
    let action = setProfileUpdated(false);

    // 2 - action
    let newState = profile_reducer(state, action);

    // 3 - expectation
    expect(newState.profileUpdatedToggle).toBe(false);
});

it('setUserProfile is successful', () => {
    // 1 - test data
    let action = setUserProfile(profile2);

    // 2 - action
    let newState = profile_reducer(state, action);

    // 3 - expectation
    expect(newState.profile.contacts.twitter).toBe('test.com/test');
});

it('setUserStatus is successful', () => {
    // 1 - test data
    let action = setUserStatus('hello');

    // 2 - action
    let newState = profile_reducer(state, action);

    // 3 - expectation
    expect(newState.status).toBe('hello');
});

it('updateProfilePhoto is successful', () => {
    // 1 - test data
    let action = updateProfilePhoto(kot);

    // 2 - action
    let newState = profile_reducer(state, action);
    //console.log(newState.status)
    // 3 - expectation
    expect(newState.status).toBe('');
});
