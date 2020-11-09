import { stopSubmit } from "redux-form";
import { AuthAxios } from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state, ...action.data,
            }
        default:
            return state;
    }
};

export const setAuthData = (id, email, login, isAuth) => ({
    type: SET_AUTH_DATA,
    data: { id, email, login, isAuth }
})

export const getAuthData = () => async dispatch => {
    let data = await AuthAxios.setAuthData()
    if (data.resultCode === 0)
        dispatch(setAuthData(data.data.id, data.data.email, data.data.login, true))
}

export const logIn = properties => async dispatch => {
    let data = await AuthAxios.logIn(properties)
    if 
        (data.resultCode === 0) dispatch(getAuthData())
    else 
        dispatch(stopSubmit('login', { _error: data.messages[0] }))
}

export const logOut = properties => async dispatch => {
    let data = await AuthAxios.logOut(properties)
    if (data.resultCode)
        console.log('error')
    else
        dispatch(setAuthData({
            id: null,
            email: null,
            login: null,
            isAuth: false
        }))
}

export default authReducer;