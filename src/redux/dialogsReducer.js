const ADD_MESSAGE = "ADD-MESSAGE";

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
};

export const addNewMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;