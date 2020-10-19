import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../state/state'
const MyPosts = (props) => {

    let Posts =
        props.profilePage.map(p => <Post message={p.message} like={p.like} />);

    let message = React.createRef();

    let addPost = () => {
        debugger
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = message.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

   

    return (
        <div className={s.text}>
            <div>
                <textarea ref={message} onChange={onPostChange} value={props.newPostText} />
            </div>
            <div className={s.button}>
                <button onClick={addPost}>Add post</button>
            </div>
            {Posts}
        </div >
    )
}

export default MyPosts;