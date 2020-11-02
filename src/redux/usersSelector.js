import { createSelector } from "reselect"

export const getUsers = (state) => {
    return state.usersPage.users
}
export const getAllUsers = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}
export const getIsFollowed = (state) => {
    return state.usersPage.isFollowed
}