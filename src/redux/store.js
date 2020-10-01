import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { like: 10, dislike: 0, text: "Hello" },
                { like: 20, dislike: 1, text: "How are you" },
                { like: 7, dislike: 5, text: "What are you doing" },
                { like: 3, dislike: 2, text: "Do you know the way???" },
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    _callSubscriber() { console.log("No subscribers") },
    
    subscribe(observer) {this._callSubscriber = observer},
    getState() { return this._state },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber();
    }
};

export default store; 