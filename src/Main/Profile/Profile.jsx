import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <img src='https://images.freeimages.com/images/large-previews/4e1/free-technical-background-design-1635196.jpg' />
            <div className={s.description}>
                <img src={props.profile.photos.large} />
                <div className={s.descriptionAbout}>
                    <div className={s.info}>fullname: {props.profile.fullName}</div>
                    <div className={s.info}>looking for a job? : {!props.profile.lookingForAJob? 'Yes':'No'}</div>
                    <div className={s.info}>about me: {props.profile.aboutMe}</div>
                    <div className={s.info}>contacts: 
                        <div className={s.infoItem}>facebook: {props.profile.contacts.facebook}</div>
                        <div className={s.infoItem}>website: {props.profile.contacts.website}</div>
                        <div className={s.infoItem}>vk: {props.profile.contacts.vk}</div>
                        <div className={s.infoItem}>twitter: {props.profile.contacts.twitter}</div>
                        <div className={s.infoItem}>instagram: {props.profile.contacts.instagram}</div>
                        <div className={s.infoItem}>youtube: {props.profile.contacts.youtube}</div>
                        <div className={s.infoItem}>github: {props.profile.contacts.github}</div>
                        <div className={s.infoItem}>mainLink: {props.profile.contacts.mainLink}</div>
                    </div>
                </div>
            </div>
            <PostsContainer />
        </div>
    );
}

export default Profile;
