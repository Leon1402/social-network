import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <img src='https://images.freeimages.com/images/large-previews/4e1/free-technical-background-design-1635196.jpg'/>
            <div className={s.description}>ava+desc</div>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
