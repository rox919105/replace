import React from 'react';
import s from './Person.module.css';
import { NavLink } from 'react-router-dom';

const Person = (props) => {

/*     let path = '/Dialogs/' + props.id; */

    return (
        <div className={s.person}>
            <NavLink to={'/Dialogs/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default Person;