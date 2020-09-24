import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.text}>
            <textarea></textarea>
            <button >Готово</button>
            <Post like='15'/>
            <Post like='20'/>
        </div >
    )
}

export default MyPosts;