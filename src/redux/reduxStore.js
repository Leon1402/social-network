const { createStore, combineReducers } = require("redux");
const { default: dialogsReducer } = require("./dialogsReducer");
const { default: profileReducer } = require("./profileReducer");
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer 
});

let store = createStore(reducers);

export default store;