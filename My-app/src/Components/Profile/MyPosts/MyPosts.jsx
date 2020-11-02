import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let PostElements =
        props.posts.map(p => <Post message={p.message} like={p.like} />);

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }    

    let onAddPost = () => {
        props.addPost();
    }

    
    
    return (
        <div className={s.text}>
            <div>
                <textarea onChange={onPostChange}
                        value={props.newPostText} />
            </div>
            <div className={s.button}>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {PostElements}
        </div >
    )
}

export default MyPosts;