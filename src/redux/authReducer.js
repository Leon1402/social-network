import { Redirect } from "react-router-dom";
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
    data: {id, email, login, isAuth}
})

export const getAuthData = () => dispatch => {
    AuthAxios.setAuthData()
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(setAuthData(data.data.id, data.data.email, data.data.login, true))
            });
}
export const logIn = properties => dispatch => {
    AuthAxios.logIn(properties)
        .then(data => {
            if(data.resultCode === 1)
               alert(data.messages)
            else
                dispatch(getAuthData())
        })
}
export const logOut = properties => dispatch => {
    AuthAxios.logOut(properties)
        .then(data => {
            if(data.resultCode)
                console.log('error')
            else{
                dispatch(setAuthData({id: null,
                    email: null,
                    login: null,
                    isAuth: false}))
                }
        })
}

export default authReducer;