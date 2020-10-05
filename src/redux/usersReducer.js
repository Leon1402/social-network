
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalCount: 100
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId)
                        return { ...u, isFriend: true };
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId)
                        return { ...u, isFriend: false };
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        default:
            return state;
    }

};

export const followAC = userId => ({
    type: FOLLOW,
    userId
});
export const unfollowAC = userId => ({
    type: UNFOLLOW,
    userId
});
export const setUsersAC = users => ({
    type: SET_USERS,
    users
});
export const setCurrentPageAC = page => ({
    type: SET_CURRENT_PAGE,
    page
})
export const setTotalCountAC = count => ({
    type: SET_TOTAL_COUNT,
    totalCount: count
})
export default usersReducer;