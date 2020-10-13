import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://cdn.mmaweekly.com/wp-content/uploads/2017/08/WME-IMG-750x370-748x370.jpg' alt='img' />
        </header>
    )
}

export default Header;