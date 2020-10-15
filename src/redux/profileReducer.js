const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";

let initialState = {
    profile: null,
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
                newPostText: ''
            }
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }

};
export const setProfileInfo = (profile) => ({ type: SET_PROFILE_INFO, profile })
export const addPostAC = () => ({ type: ADD_POST });
export const changeNewPostAC = text => ({ type: CHANGE_NEW_POST, text: text });

export default profileReducer;