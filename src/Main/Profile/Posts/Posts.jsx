import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {

    let postsElements = props.posts.map(post =>
        <Post like={post.like} dislike={post.dislike} text={post.text} />)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.Posts}>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addNewPost}>Add new post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;
