import React from 'react';
import s from './Dialogs.module.css';
import Person from './DialogsComponents/Person'
import Dialog from './DialogsComponents/Dialog'
import {addNewMessageCreator, updateNewMessageBodyCreator} from '../../state/dialogsReducer'


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let personsElements =
        state.personsData.map( p => <Person name={p.name} id={p.id} />)

    let dialogElements =
        state.messageData.map( m => <Dialog message={m.message} />);

    let onMessageChange = (event) =>{
        debugger
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    let onAddMessage = () =>{
        debugger
        props.store.dispatch(addNewMessageCreator());
    }


    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {personsElements}
            </div>
            <div className={s.messages}>
                <div> {dialogElements} </div>
                <div><textarea value={state.newMessageBody} onChange={onMessageChange}/></div>
                <div><button onClick={onAddMessage}>add</button></div>
            </div>
        </div >
    )
}

export default Dialogs;