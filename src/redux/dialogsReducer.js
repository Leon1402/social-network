const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"

let initialState = {
    dialogs: [
        { name: "Ivan", id: "0" },
        { name: "Semen", id: "1" },
        { name: "Petr", id: "2" },
        { name: "Kirill", id: "3" },
        { name: "Nastya", id: "4" }
    ],
    messages: [
        { message: 'Hello', id: "0" },
        { message: 'How are you', id: "1" },
        { message: '12345', id: "2" },
        { message: 'qwert', id: "3" },
        { message: 'Do you know the way???', id: "4" },
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
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