import { AuthAxios } from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA"

let initialState = {
    id: null,
    email: null,
    login: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state, ...action.data
            }
        default:
            return state;
    }

};

export const setAuthData = (data) => ({
    type: SET_AUTH_DATA,
    data
})

export const getAuthDataThunkCreator = () => dispatch => {
    AuthAxios.setAuthData()
            .then(data => {
                dispatch(setAuthData(data.data))
            });
}

export default authReducer;