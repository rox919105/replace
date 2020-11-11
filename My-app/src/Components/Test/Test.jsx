import React from 'react';
import s from './Test.module.css';
//import { NavLink } from 'react-router-dom';
import Structure from './TestComponenets/Structure';
import Adress from './TestComponenets/Adress';
//import { createRef } from 'react';


let Test = (props) =>{

    
        let Struct = [
            { id: 1, name: 'Дермiще' },
            { id: 2, name: 'Гiмножек' },
            { id: 3, name: 'Гiмноканал' },
            { id: 4, name: 'Puka' },
            { id: 5, name: 'koko' },
            { id: 6, name: 'Ilalo' },
            { id: 7, name: 'AlaAla' },
        ];

        let Contacts = [
            { id: 1, adress: 'М. Житомир. вул Жуйка 2 - ', tel: 351254 },
            { id: 2, adress: 'М. Житомир. вул Чорновола 17/4 - ', tel: 351254 },
            { id: 3, adress: 'М. Житомир. вул ОнА 0 - ', tel: 35123124 },
            { id: 4, adress: 'М. Житомир. вул Алала 7 - ', tel: 351254 },
            { id: 5, adress: 'М. Житомир. вул Dendragona 1 - ', tel: 351233 },
            { id: 6, adress: 'М. Житомир. вул Akra 2 - ', tel: 87351254 },
            { id: 7, adress: 'М. Житомир. вул Котовського 93 - ', tel: 308951254 }
        ];

    let Omno = Struct.map( n =><Structure key={n.id} name={n.name} id={n.id} />);

    let Find = Contacts.map( a =><Adress key={a.id} adress={a.adress} tel={a.tel} /> );


    let message = React.createRef();

    let addPost = () =>{
        alert('s');
    }

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
            <div className={s.testButton}>
                <div>
                    <textarea ref={message} />
                </div>
                <div>
                    <button onClick={addPost}>add</button>
                </div>
            </div>
            
        </div>
        )
}


export default Test;