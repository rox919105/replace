import React from 'react';
import { connect } from 'react-redux';
import {addNewMessageCreator, updateNewMessageBodyCreator} from '../../state/dialogsReducer'
import Dialogs from './Dialogs'


const mapStateToProps = (state) => {
    
    return{
        personsData: state.dialogsPage.personsData,
        messageData: state.dialogsPage.messageData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        MessageChange: (body) => {
            let action = updateNewMessageBodyCreator(body)
            dispatch(action);
        },
        AddMessage: () => {
            dispatch(addNewMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;