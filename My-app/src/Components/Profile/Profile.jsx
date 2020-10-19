import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                profilePage={props.profilePage.postData}
                newPostText={props.profilePage.newPostText} />
        </div>
    )
}


export default Profile;