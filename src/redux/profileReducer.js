const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                like: 0,
                dislike: 0,
                text: state.newPostText
            };
            state.newPostText = "";
            state.posts.push(newPost);
            break;
        case CHANGE_NEW_POST:
            state.newPostText = action.text;
            break;
        default:
            break;
    }
    return state;
};

export const addPostAC = () => ({type: ADD_POST});
export const changeNewPostAC = text => ({type: CHANGE_NEW_POST, text: text});

export default profileReducer;