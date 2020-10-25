import React from 'react';
import {addNewMessageCreator, updateNewMessageBodyCreator} from '../../state/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
debugger
    let state = props.store.getState().dialogsPage;

    let MessageChange = (body) =>{
        let action = updateNewMessageBodyCreator(body)
        props.store.dispatch(action);
    }
    let AddMessage = () =>{
        props.store.dispatch(addNewMessageCreator());
    }


    return( <Dialogs MessageChange={MessageChange} AddMessage={AddMessage}
                    personsData={state.personsData}
                    messageData={state.messageData}
                    newMessageBody={state.newMessageBody} />)
}

export default DialogsContainer;