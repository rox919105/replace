import React from 'react';
import s from './Dialogs.module.css';
import Person from './DialogsComponents/Person'
import Dialog from './DialogsComponents/Dialog'
import { Redirect } from 'react-router-dom';



const Dialogs = (props) => {

    let personsElements =
        props.personsData.map( p => <Person name={p.name} id={p.id} key={p.id} />)

    let dialogElements =
        props.messageData.map( m => <Dialog message={m.message} key={m.id} />);

    let onMessageChange = (event) =>{
        let body = event.target.value;
        props.MessageChange(body);

    }
    let onAddMessage = () =>{
        props.AddMessage();
    }

    if (!props.isAuth) return <Redirect to='/login' />;

    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {personsElements}
            </div>
            <div className={s.messages}>
                <div> {dialogElements} </div>
                <div><textarea value={props.newMessageBody}
                                onChange={onMessageChange}/></div>
                <div><button onClick={onAddMessage}>add</button></div>
            </div>
        </div >
    )
}

export default Dialogs;