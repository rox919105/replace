import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Dialog;