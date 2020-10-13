import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Person from './DialogsComponents/Person'
import Dialog from './DialogsComponents/Dialog'
import { findAllInRenderedTree } from 'react-dom/test-utils';



const Dialogs = (props) => {

  
    let personsElements =
     props.state.personsData.map( p => <Person name={p.name} id={p.id} />)

    let dialogElements =
     props.state.messageData.map( m => <Dialog message={m.message} />);

    let textAdd = React.createRef();

    let newMessage = () =>{
        let add = textAdd.current.value;
        alert(add);
    }
     
    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {personsElements}
            </div>
            <div className={s.messages}>
                {dialogElements}
            </div>
            <textarea ref={textAdd} /> 
            <button onClick={newMessage}>add</button>
        </div >
    )
}

export default Dialogs;