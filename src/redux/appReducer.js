import { getAuthData } from "./authReducer";

const INITIAL_SUCCESS = "INITIALIZING_SUCCESS"

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

};

export const initialSuccess = () => ({type: INITIAL_SUCCESS})
export const initialization = () => dispatch => {
    let promise = dispatch(getAuthData())
    
    Promise.all([promise]).then(() => dispatch(initialSuccess()))
}

export default appReducer;