import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    authPage: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;