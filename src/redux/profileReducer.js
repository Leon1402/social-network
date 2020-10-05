const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";

let initialState = {
    posts: [
        { like: 10, dislike: 0, text: "Hello" },
        { like: 20, dislike: 1, text: "How are you" },
        { like: 7, dislike: 5, text: "What are you doing" },
        { like: 3, dislike: 2, text: "Do you know the way???" }
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                like: 0,
                dislike: 0,
                text: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
<<<<<<< HEAD
                newPostText: ""
=======
                newPostText: ''
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
            }
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state;
    }
<<<<<<< HEAD
=======
    
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
};

export const addPostAC = () => ({ type: ADD_POST });
export const changeNewPostAC = text => ({ type: CHANGE_NEW_POST, text: text });

export default profileReducer;