import {createSelector} from "reselect";

export const getUsersPrimitive = (state) => {
    return state.users.usersList;
}

export const getUsersSel = (state) => {
    return getUsersPrimitive(state).filter(u => true);
}

export const getIsFetching = (state) => {
    return state.users.isFetching;
}

export const getUsersSuper = createSelector(getUsersPrimitive,getIsFetching,(users,f) => {
    return users.filter(u => true);
})

export const getUsersPerPage = (state) => {
    return state.users.usersPerPage;
}

export const getTotalUsers = (state) => {
    return state.users.totalUsers;
}

export const getCurrentPage = (state) => {
    return state.users.currentPage;
}


export const getFollowingIsInProgress = (state) => {
    return state.users.followingIsInProgress;
}

