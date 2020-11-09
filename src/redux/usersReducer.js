import { UsersAxios } from "../api/api";
import { usersFollowed } from "../utils/oblectHelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING';
const CHANGE_IS_FOLLOWED = 'CHANGE_IS_FOLLOWED';

let initialState = {
    users: [],
    pageSize: 20,
    currentPage: 1,
    totalCount: 100,
    isLoading: false,
    isFollowed: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: usersFollowed(state.users, action.userId, true)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: usersFollowed(state.users, action.userId, false)
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
        case CHANGE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case CHANGE_IS_FOLLOWED:
            return {
                ...state,
                isFollowed: action.isFollow
                    ? [...state.isFollowed, action.userId]
                    : state.isFollowed.filter(u => u != action.userId)
            }
        default:
            return state;
    }

};

export const follow = userId => ({
    type: FOLLOW,
    userId
});
export const unfollow = userId => ({
    type: UNFOLLOW,
    userId
});
export const setUsers = users => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = page => ({
    type: SET_CURRENT_PAGE,
    page
})
export const setTotalCount = count => ({
    type: SET_TOTAL_COUNT,
    totalCount: count
});
export const changeIsloading = isLoading => ({ type: CHANGE_IS_LOADING, isLoading });
export const changeIsFollowed = (userId, isFollow) => ({
    type: CHANGE_IS_FOLLOWED,
    userId,
    isFollow
});

export const getUsersThunkCreator = (pageSize, currentPage) => async dispatch => {
    dispatch(changeIsloading(true));
    let data = await UsersAxios.getUsers(pageSize, currentPage)

    dispatch(changeIsloading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount / 20));
    dispatch(setCurrentPage(currentPage))
}
export const followUnfollowTC = async (dispatch, id, func, apiMethod) => {
    dispatch(changeIsFollowed(id, true));
    let data = await apiMethod(id)
    if (!data.resultCode)
        dispatch(func(id));
    dispatch(changeIsFollowed(id, false));
}
export const followTnunkCreator = id => dispatch => 
    followUnfollowTC(dispatch, id, follow, UsersAxios.follow)
export const unfollowTnunkCreator = id =>   dispatch => 
    followUnfollowTC(dispatch, id, unfollow, UsersAxios.unfollow)

export default usersReducer;