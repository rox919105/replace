import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (
        <div>
            <div className={s.item}>
                <img src='https://www.avaentertainment.net/en/frontend/storage/blogs/KAcnga5VkUf5oyp47b5xHzQSULwPI1icDzerung5.jpeg' alt='avatar' />
                <span>
                    {props.message}
                </span>
                <br />
                <span className={s.likes}>
                    {props.like}
                </span>
                
            </div>
            <div>
                <span>like</span>
                <span>dislike</span>
            </div>
        </div >
    )
}

export default Post;