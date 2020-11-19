export const getUsersSel = (state) => {
    return state.users.usersList;
}

export const getUsersPerPage = (state) => {
    return state.users.usersPerPage;
}

export const getTotalUsers = (state) => {
    return state.users.totalUsers;
}

export const getCurrentPage = (state) => {
    return state.users.currentPage;
}

export const getIsFetching = (state) => {
    return state.users.isFetching;
}

export const getFollowingIsInProgress = (state) => {
    return state.users.followingIsInProgress;
}

