import users_reducer, {
    changeUserFollowStatus,
    setCurrentPage,
    setFollowingInProgress,
    setTotalUsers,
    setUsers
} from "./users_reducer";
import React from 'react';
import '@testing-library/jest-dom'

let state = {
    usersList: [],
    usersPerPage: 20,
    totalUsers: 0,
    currentPage: 30,
    isFetching: true,
    followingIsInProgress: [],
    fake: 0
}
let state2 = {
    usersList: [
        {
            "name": "WD",
            "id": 11583,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "lesson 85",
            "followed": false
        },
        {
            "name": "Vagabund2",
            "id": 11582,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Kek_Wait",
            "id": 11581,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "авыаыв",
            "followed": true
        },
        {
            "name": "Phantasmagoria",
            "id": 11580,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "kovalenko_ng",
            "id": 11579,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "AlexanderDubatovka",
            "id": 11578,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "ruslan-kahramanov",
            "id": 11577,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "I'am a boss",
            "followed": false
        },
        {
            "name": "ReactYuraOleh",
            "id": 11576,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "Good evening!! my dear friends! What is up?",
            "followed": false
        },
        {
            "name": "mkhitar1999",
            "id": 11575,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "I'm here",
            "followed": false
        },
        {
            "name": "AbraCatabra",
            "id": 11574,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "more8",
            "id": 11573,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Vladislav Shevel",
            "id": 11572,
            "uniqueUrlName": null,
            "photos": {
                "small": "https://social-network.samuraijs.com/activecontent/images/users/11572/user-small.jpg?v=1",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/11572/user.jpg?v=1"
            },
            "status": "I'm the best!",
            "followed": false
        },
        {
            "name": "AlexAbS",
            "id": 11571,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "Люблю сушеное мороженое",
            "followed": false
        },
        {
            "name": "ivan_92",
            "id": 11570,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Polkhovskaya",
            "id": 11569,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "my sf",
            "followed": false
        },
        {
            "name": "quspari",
            "id": 11568,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "gdfg",
            "followed": false
        },
        {
            "name": "Evelas",
            "id": 11567,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "status",
            "followed": false
        },
        {
            "name": "Artroket",
            "id": 11566,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "hjjj",
            "followed": false
        },
        {
            "name": "mk256",
            "id": 11565,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "nSary",
            "id": 11564,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }
    ],
    usersPerPage: 20,
    totalUsers: 0,
    currentPage: 30,
    isFetching: true,
    followingIsInProgress: [],
    fake: 0
}

let usersArray = [
    {
        "name": "WD",
        "id": 11583,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "lesson 85",
        "followed": false
    },
    {
        "name": "Vagabund2",
        "id": 11582,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "Kek_Wait",
        "id": 11581,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "авыаыв",
        "followed": true
    },
    {
        "name": "Phantasmagoria",
        "id": 11580,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "kovalenko_ng",
        "id": 11579,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "AlexanderDubatovka",
        "id": 11578,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "ruslan-kahramanov",
        "id": 11577,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "I'am a boss",
        "followed": false
    },
    {
        "name": "ReactYuraOleh",
        "id": 11576,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "Good evening!! my dear friends! What is up?",
        "followed": false
    },
    {
        "name": "mkhitar1999",
        "id": 11575,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "I'm here",
        "followed": false
    },
    {
        "name": "AbraCatabra",
        "id": 11574,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "more8",
        "id": 11573,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "Vladislav Shevel",
        "id": 11572,
        "uniqueUrlName": null,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/11572/user-small.jpg?v=1",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/11572/user.jpg?v=1"
        },
        "status": "I'm the best!",
        "followed": false
    },
    {
        "name": "AlexAbS",
        "id": 11571,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "Люблю сушеное мороженое",
        "followed": false
    },
    {
        "name": "ivan_92",
        "id": 11570,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "Polkhovskaya",
        "id": 11569,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "my sf",
        "followed": false
    },
    {
        "name": "quspari",
        "id": 11568,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "gdfg",
        "followed": false
    },
    {
        "name": "Evelas",
        "id": 11567,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "status",
        "followed": false
    },
    {
        "name": "Artroket",
        "id": 11566,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": "hjjj",
        "followed": false
    },
    {
        "name": "mk256",
        "id": 11565,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
    {
        "name": "nSary",
        "id": 11564,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    }
];

it('setting users is successful', () => {

    // 1 - test data
    let action = setUsers(usersArray)

    // 2 - action
    let newState = users_reducer(state,action);

    // 3 - expectation
    expect(newState.usersList.length).toBe(20)

});


it('change User Follow Status is successful', () => {

    // 1 - test data

    //let action1 = setUsers(usersArray);
    let action = changeUserFollowStatus(11583, 1)

    // 2 - action
    let newState = users_reducer(state2,action);
    //let newState2 = users_reducer(newState,action2);

    // 3 - expectation
    expect(newState.usersList[0].followed).toBe(true)


});



it('change User unFollow Status is successful', () => {

    // 1 - test data

    //let action1 = setUsers(usersArray);
    let action = changeUserFollowStatus(11583, 0)

    // 2 - action
    let newState = users_reducer(state2,action);
    //let newState2 = users_reducer(newState,action2);

    // 3 - expectation
    expect(newState.usersList[0].followed).toBe(false)


});


it('set totalUsers is successful', () => {

    // 1 - test data

    //let action1 = setUsers(usersArray);
    let action = setTotalUsers(1777)

    // 2 - action
    let newState = users_reducer(state,action);
    //let newState2 = users_reducer(newState,action2);

    // 3 - expectation
    expect(newState.totalUsers).toBe(1777)


});

it('set currentPage is successful', () => {
    // 1 - test data
    let action = setCurrentPage(90);

    // 2 - action
    let newState = users_reducer(state,action);

    // 3 - expectation
    expect(newState.currentPage).toBe(90);
});

it('set followingIsInProgress true is successful', () => {
    // 1 - test data
    let action = setFollowingInProgress(true,22);

    // 2 - action
    let newState = users_reducer(state,action);

    // 3 - expectation
    expect(newState.followingIsInProgress[0]).toBe(22);
});

it('set followingIsInProgress false is successful', () => {
    // 1 - test data
    let action = setFollowingInProgress(false,22);

    // 2 - action
    let newState = users_reducer(state,action);

    // 3 - expectation
    expect(newState.followingIsInProgress.length).toBe(0);
});



