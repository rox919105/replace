import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../state/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


const mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;