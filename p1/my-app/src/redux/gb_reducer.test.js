import React from 'react';
import '@testing-library/jest-dom'
import gb_reducer, {addGBPost, delGBpost, newGBpostChange, setGBPosts} from "./gb_reducer";

let state = {
    gbPosts: [],
    newPostText: 'hi how are u?))',
}

let posts = [
    {answer: "",
        answer_time: "0",
        email: "ddddd@mail.com",
        id: 1,
        ip: "",
        login: "Марічка",
        status: "1",
        text: 'test 1',
        time: '02:16 05-07-2020',
        ua: ""},
    {answer: "",
        answer_time: "0",
        email: "ddddd@mail.com",
        id: 2,
        ip: "",
        login: "Микола",
        status: "1",
        text: 'test 2',
        time: '02:16 05-07-2020',
        ua: ""},

];

let state2 = {
    gbPosts: posts,
    newPostText: 'hi how are u?))',
}


it('__________ addGBPost is successful', () => {
    // 1 - test data
    let action = addGBPost('test');

    // 2 - action
    let newState = gb_reducer(state, action);

    // 3 - expectation
    expect(newState.gbPosts[0].text).toBe('test');
});

it('__________ setGBPosts is successful', () => {
    // 1 - test data
    let action = setGBPosts(posts);

    // 2 - action
    let newState = gb_reducer(state, action);

    // 3 - expectation
    expect(newState.gbPosts[0].text).toBe('test 1');
});

it('__________ newGBpostChange is successful', () => {
    // 1 - test data
    let action = newGBpostChange('newPostText ddd');

    // 2 - action
    let newState = gb_reducer(state, action);

    // 3 - expectation
    expect(newState.newPostText).toBe('newPostText ddd');
});

it('__________ delGBpost is successful', () => {
    // 1 - test data
    let action = delGBpost(1);

    // 2 - action
    let newState = gb_reducer(state2, action);

    // 3 - expectation
    expect(newState.gbPosts.length).toBe(1);
});