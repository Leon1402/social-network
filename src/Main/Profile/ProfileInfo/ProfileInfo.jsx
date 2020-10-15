import React from 'react';
import Loader from '../../../common/Loader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Loader />
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large
                    ? props.profile.photos.large
                    : 'https://vk-wiki.ru/wp-content/uploads/2019/04/male-user-profile-picture.png'} />
            </div>
            <div className={s.info}>
                <div>fullName: {props.profile.fullName}</div>
                <div>aboutMe: {props.profile.aboutMe}</div>
                <div>lookingForAJob</div>
                <div className={s.contacts}>contacts
                    <div>facebook: {props.profile.contacts.facebook}</div>
                    <div>github: {props.profile.contacts.github}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>mainLink: {props.profile.contacts.mainLink}</div>
                    <div>twitter: {props.profile.contacts.twitter}</div>
                    <div>vk: {props.profile.contacts.vk}</div>
                    <div>website: {props.profile.contacts.website}</div>
                    <div>youtube: {props.profile.contacts.youtube}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
