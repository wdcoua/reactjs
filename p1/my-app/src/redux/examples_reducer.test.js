import React from 'react';
import '@testing-library/jest-dom'
import examples_reducer, {addNewExample, delExample, setExamples} from "./examples_reducer";

let state = {
    examplesList: [
        // {id:1,name:'Галерея'},
        // {id:2,name:'Страховой калькулятор'},
    ]
}

let examples = [

    {id:1,name:'Галерея'},
    {id:2,name:'Страховой калькулятор'}

];

let state2 = {
    examplesList: examples,
}


it('__________ setExamples is successful', () => {
    // 1 - test data
    let action = setExamples(examples);

    // 2 - action
    let newState = examples_reducer(state, action);

    // 3 - expectation
    expect(newState.examplesList.length).toBe(2);
});

it('__________ delExample is successful', () => {
    // 1 - test data
    let action = delExample(1);

    // 2 - action
    let newState = examples_reducer(state2, action);

    // 3 - expectation
    expect(newState.examplesList.length).toBe(1);
});

it('__________ addNewExample is successful', () => {
    // 1 - test data
    let action = addNewExample({id:3,name:'Просто тест'});

    // 2 - action
    let newState = examples_reducer(state2, action);

    // 3 - expectation
    expect(newState.examplesList.length).toBe(3);
});