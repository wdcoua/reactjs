import React from 'react';
import '@testing-library/jest-dom'
import app_reducer, {setInitialized} from "./app_reducer";

let state = {
    initialized: false
}

it('__________ setInitialized is successful', () => {
    // 1 - test data
    let action = setInitialized();

    // 2 - action
    let newState = app_reducer(state, action);

    // 3 - expectation
    expect(newState.initialized).toBe(true);
});
