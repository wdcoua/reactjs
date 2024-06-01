import React from 'react';
import '@testing-library/jest-dom'
import admin_reducer, {
    addCat,
    setCatList
} from "./admin_reducer";

let state = {
    catList: null,
}

it('__________ setCatList is successful', () => {
    // 1 - test data
    let catList = {
        0:{"name": "хлопчики",
            "id": 12},
        1:{"name": "дівчатка",
            "id": 14}
    }
    let action = setCatList(catList);

    // 2 - action
    let newState = admin_reducer(state, action);

    // 3 - expectation
    expect(newState.catList[0].id).toBe(12);
});

it('__________ addCat is successful', () => {
    // 1 - test data
    let newCat = {"name": "6-12 місяців",
            "id": 22}

    let action = addCat(newCat);

    // 2 - action
    let newState = admin_reducer(state, action);

    // 3 - expectation
    expect(newState.catList[0].id).toBe(22);
});
