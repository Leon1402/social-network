import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <img src='https://images.freeimages.com/images/large-previews/4e1/free-technical-background-design-1635196.jpg'/>
            <div className={s.description}>ava+desc</div>
<<<<<<< HEAD
            <PostsContainer />
=======
            <PostsContainer/>
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
        </div>
    );
}

export default Profile;
