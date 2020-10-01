const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            break;
        case CHANGE_NEW_MESSAGE:
            state.newMessageText = action.text;
            break;
        default:
            break;
    }
    return state;
};

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const changeNewMessageAC = text => ({type: CHANGE_NEW_MESSAGE, text: text});

export default dialogsReducer;