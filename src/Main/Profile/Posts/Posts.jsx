import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormControl';
import { isFilled, maxLength } from '../../../utils/validators';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {

    let postsElements = [...props.posts].reverse().map((post, i) =>
        <Post like={post.like} dislike={post.dislike} text={post.text} key={i} />)

    let addNewPost = (value) => {
        props.addNewPost(value.newPostText);
    }

    return (
        <div className={s.Posts}>
            <NewPostForm onSubmit={addNewPost} />
            <div className={s.PostsElement}>
                {postsElements}
            </div>
        </div>
    );
}

const maxInputLength = maxLength(50) 

let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter new post'
                name='newPostText'
                component={Textarea}
                validate={[isFilled, maxInputLength]}/>
            <div>
                <button>Add new post</button>
            </div>
        </form>
    )
}

NewPostForm = reduxForm({ form: 'NewPostForm' })(NewPostForm)

export default Posts;