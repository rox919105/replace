import React from 'react';
import s from './Adress.module.css';
import { NavLink } from 'react-router-dom';


const Adress = (props) => {
    return(
        <div className={s.a}>
            <NavLink to>{props.id}--{props.adress}---{props.tel}</NavLink>
        </div>
    )
}

export default Adress;