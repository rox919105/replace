const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'




const dialogsReduser = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                message: state.newMessageBody
            };
            state.messageData.push(newMessage);
            state.newMessageBody = '';

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage;
        default:
            return state
    }
}

export const addNewMessageCreator = () => {
    return {
        type: ADD_NEW_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newMessage: body
    }
}


export default dialogsReduser;