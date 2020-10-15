import React from 'react';
import s from './Dialogs.module.css';
import Person from './DialogsComponents/Person'
import Dialog from './DialogsComponents/Dialog'



const Dialogs = (props) => {

 
    let personsElements =
     props.state.personsData.map( p => <Person name={p.name} id={p.id} />)

    let dialogElements =
     props.state.messageData.map( m => <Dialog message={m.message} />);

    let textAdd = React.createRef();

    let newMessage = () =>{
        props.addOneNew();
        textAdd.current.value = '';
    }
    let onMessageChange = () =>{
        let text = textAdd.current.value;
        props.updatedNewOne(text);

    }
     
    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {personsElements}
            </div>
            <div className={s.messages}>
                {dialogElements}
            </div>
            <textarea ref={textAdd} onChange={onMessageChange} value={props.newMessageText} /> 
            <button onClick={newMessage}>add</button>
        </div >
    )
}

export default Dialogs;