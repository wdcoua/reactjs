import React from 'react';
import '@testing-library/jest-dom'
import profile_reducer, {setUserProfile, setUserStatus} from "./profile_reducer";

let state = {
    profile: null,
    status: ""
}

let profile = {
    'login':'test',
    'id': 15
}

it('setUserProfile is successful', () => {
    // 1 - test data
    let action = setUserProfile(profile);

    // 2 - action
    let newState = profile_reducer(state, action);

    // 3 - expectation
    expect(newState.profile.login).toBe('test');
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
    let action = updateProfilePhoto('photo');

    // 2 - action
    let newState = profile_reducer(state, action);

    // 3 - expectation
    expect(newState.status).toBe('hello');
});
