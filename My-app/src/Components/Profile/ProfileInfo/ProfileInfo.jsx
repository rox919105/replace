import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt='ret' />
            </div>
            <div className={s.item}>ava+description</div>
        </div>
    )
}

export default ProfileInfo;