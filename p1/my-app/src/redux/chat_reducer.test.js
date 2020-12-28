import React from 'react';
import '@testing-library/jest-dom'
import chat_reducer, {addChatPost, delChatPost, newChatPostChange} from "./chat_reducer";

let state = {
    chatPosts: [
        {id: 1, author: 'Котигорошко', authorAva: 'kot', text: 'Привіт, ти тут?', date: '15:25 17-08-2020'},
        {id: 2, author: 'Admin', authorAva: 'za', text: 'Привіт, так', date: '15:26 17-08-2020'},
    ],
    newChatPostText: 'this is Sparta!',
}

/*let examples = [

    {id:1,name:'Галерея'},
    {id:2,name:'Страховой калькулятор'}

];

let state2 = {
    examplesList: examples,
}*/


it('__________ addChatPost is successful', () => {
    // 1 - test data
    let action = addChatPost('test');

    // 2 - action
    let newState = chat_reducer(state, action);

    // 3 - expectation
    expect(newState.chatPosts.length).toBe(3);
});

it('__________ newChatPostChange is successful', () => {
    // 1 - test data
    let action = newChatPostChange('test');

    // 2 - action
    let newState = chat_reducer(state, action);

    // 3 - expectation
    expect(newState.newChatPostText).toBe('test');
});

it('__________ delChatPost is successful', () => {
    // 1 - test data
    let action = delChatPost(1);

    // 2 - action
    let newState = chat_reducer(state, action);

    // 3 - expectation
    expect(newState.chatPosts.length).toBe(1);
});

it('__________ delChatPost is not successful if ID is incorrect', () => {
    // 1 - test data
    let action = delChatPost(100);

    // 2 - action
    let newState = chat_reducer(state, action);

    // 3 - expectation
    expect(newState.chatPosts.length).toBe(2);
});