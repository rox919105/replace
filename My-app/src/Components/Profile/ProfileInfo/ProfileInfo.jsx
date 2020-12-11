import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../assets/images/Preloader.gif'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    
    if (!props.profile)
        return  <img src={Preloader} alt='loading'/>
    return (
        <div className={s.content}>           
            <img src={props.profile.photos.large} alt='img' />
            <div>{props.profile.fullName}</div>
            <ProfileStatus status={props.status}
            updateUserStatus={props.updateUserStatus}/>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div className={s.item}>ava+description</div>
        </div>
    )
}

export default ProfileInfo;