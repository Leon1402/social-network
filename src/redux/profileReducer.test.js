import profileReducer, { addNewPost } from "./profileReducer";

let initialState = {
    posts: [
        { like: 10, dislike: 0, text: "Hello" },
        { like: 20, dislike: 1, text: "How are you" },
        { like: 7, dislike: 5, text: "What are you doing" },
        { like: 3, dislike: 2, text: "Do you know the way???" }
    ]
};

it('add new post', () => {

    initialState = profileReducer(initialState, addNewPost("sdsda"));

    expect(initialState.posts.length).toBe(5);
});
