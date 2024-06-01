import {createSelector} from "reselect";

export const getCatListSel = (state) => {
    return state.admin.catList;
}
export const getItemsListSel = (state) => {
    return state.admin.itemList;
}
//
// export const getUsersSel = (state) => {
//     return getUsersPrimitive(state).filter(u => true);
// }
//
// export const getIsFetching = (state) => {
//     return state.users.isFetching;
// }
//
// export const getUsersSuper = createSelector(getUsersPrimitive,getIsFetching,(users,f) => {
//     return users.filter(u => true);
// })
