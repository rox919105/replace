import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let Posts =
     props.state.map( p => <Post message={p.message } like={p.like} /> );

    let message = React.createRef();

  let addPost = () =>{
  
 
        let add = message.current.value;
        props.addPost(add);
        message.current.value = '';
    } 

    return (
        <div className={s.text}>
            <div>
                <textarea ref={message}></textarea>
            </div>
            <div className={s.button}>
                <button onClick={addPost}>Add post</button>
            </div>
            {Posts}
        </div >
    )
}

export default MyPosts;