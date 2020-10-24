const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postData: [
        { id: 1, message: 'qweqwe', like: 15 },
        { id: 2, message: 'asdasd', like: 21 },
        { id: 3, message: 'left', like: 28 },
        { id: 4, message: 'all', like: 20 },
        { id: 5, message: 'no', like: 11 },
    ],
    newPostText: 'Add Post',
};

const profileReduser = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state 
    }
}

export const addPostActionCreator = () => {
    return{
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT , newText: text
    }
}


export default profileReduser;