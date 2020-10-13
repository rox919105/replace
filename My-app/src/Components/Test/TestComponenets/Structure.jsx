import React from 'react';
import s from './Structure.module.css';
import { NavLink } from 'react-router-dom';


let Structure = (props) => {
    return(
        <div className={s.a}>
            <NavLink to={'/Test/' + props.id} activeClassName={s.activeLink} >{props.name}</NavLink>
        </div>
    )
}


export default Structure