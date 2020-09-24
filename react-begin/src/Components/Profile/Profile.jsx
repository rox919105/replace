import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt='ret' />
            </div>
            <div className={s.item}>ava+description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;