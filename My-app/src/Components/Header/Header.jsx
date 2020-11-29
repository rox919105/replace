import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://cdn.mmaweekly.com/wp-content/uploads/2017/08/WME-IMG-750x370-748x370.jpg' alt='img' />
            { props.isAuth ? <div className={s.authLogin}>{ props.login }</div>:
            <NavLink to={'/login'} >
                <div className={s.authLogin}>login</div>
            </NavLink>
            }
        </header>
    )
}

export default Header;