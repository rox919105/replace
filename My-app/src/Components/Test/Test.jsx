import React from 'react';
import s from './Test.module.css';
import { NavLink } from 'react-router-dom';
import Structure from './TestComponenets/Structure';
import Adress from './TestComponenets/Adress';


let Test = (props) =>{

   
   
    let Omno = props.state.Struct.map( n =><Structure name={n.name} id={n.id} />);

    let Find = props.state.Contacts.map( a =><Adress adress={a.adress} tel={a.tel} /> );

    return (

        <div className={s.parent}>
            <div className={s.firstColumn}>
                <div className={s.a}>
                    {Omno}
                </div>
                
            </div>
            <div className={s.seecondColumn}>
                <div className={s.b}>
                    {Find}
                </div>
            </div>
            
        </div>
        )
}


export default Test;