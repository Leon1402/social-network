import React from 'react';
import { addPostAC, changeNewPostAC } from '../../../redux/profileReducer';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {

    let postsElements = props.state.posts.map(post =>
        <Post like={post.like} dislike={post.dislike} text={post.text} />)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        if (text) props.dispatch(addPostAC());
        else alert("Enter text!!!");
        
    }
    let changeNewPost = () => {
        let text = newPostElement.current.value
        props.dispatch(changeNewPostAC(text));
    }
    return (
        <div className={s.Posts}>
            <div className={s.newPost}>
                <textarea ref={newPostElement}
                    value={props.state.newPostText}
                    placeholder="Enter new post"
                    onChange={changeNewPost}/>
                <div>
                    <button onClick={addNewPost}>Add new post</button>
                </div>
            </div>
            <div className={s.PostsElement}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;