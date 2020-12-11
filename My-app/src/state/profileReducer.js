import { profileAPI, usersAPI } from "../Api/Api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    postData: [
        { id: 1, message: 'qweqwe', like: 15 },
        { id: 2, message: 'asdasd', like: 21 },
        { id: 3, message: 'left', like: 28 },
        { id: 4, message: 'all', like: 20 },
        { id: 5, message: 'no', like: 11 },
    ],
    newPostText: 'Add Post',
    profile: null,
    status: ''
};

const profileReduser = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            };
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        case SET_USER_PROFILE:
            return{
                ...state, profile: action.profile
            } 
            
        case SET_USER_STATUS:
            return{
                ...state, status: action.status
            } 


        default:
            return state 
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })


export const SetProfile = (userId) => {
    return (dispatch) => {
        usersAPI.setProfile(userId)
            .then(data => {
                dispatch (setUserProfile(data))
            });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch (setUserStatus(data))
            });
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                dispatch (setUserStatus(status))
                }
            });
    }
}


export default profileReduser;