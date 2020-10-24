const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'


let initialState = {
    personsData: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Nate' },
        { id: 3, name: 'Bot' },
        { id: 4, name: 'Rox' },
        { id: 5, name: 'Bunny' },
        { id: 6, name: 'Pukan' },
        { id: 7, name: 'Pukach' },
        { id: 8, name: 'Puk' },
    ],

    messageData: [
        { message: 'hey' },
        { message: 'Allright' },
        { message: 'Eija' },
        { message: 'EEEEE' },
        { message: 'TTTTTTGGGG' },
        { message: 'QQQQQQQQCVBHHG' },
        { message: 'HHHHHHHHHHV' },
        { message: 'HTRTRRRRRRRRRRRD' }
    ],
    newMessageBody: 'Add Message',
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                message: state.newMessageBody
            };
            state.messageData.push(newMessage);
            state.newMessageBody = '';
            return state;

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