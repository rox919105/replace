import React from 'react';
import s from './Dialogs.module.css';
import Person from './DialogsComponents/Person'
import Dialog from './DialogsComponents/Dialog'



const Dialogs = (props) => {

 
    let personsElements =
     props.state.personsData.map( p => <Person name={p.name} id={p.id} />)

    let dialogElements =
     props.state.messageData.map( m => <Dialog message={m.message} />);

    
    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {personsElements}
            </div>
            <div className={s.messages}>
                {dialogElements}
            </div>
        </div >
    )
}

export default Dialogs;