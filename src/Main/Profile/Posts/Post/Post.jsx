import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg" />
            <div className={s.postBlock}>
                <div className={s.postBlockText}>
                    {props.text}
                </div>
                <div className={s.postBlockRating}>
                    <a href="">Like</a><span>{props.like}</span>
                    <a href="">Dislike</a><span>{props.dislike}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
