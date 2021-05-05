import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={`${style.item} ${style.visited}`}>
                    <a href='/profile'>Profile</a>
                </li>
                <li className={style.item}>
                    <a href='/dialogs'>Messages</a>
                </li>
                <li className={style.item}>
                    <a href='/news'>News</a>
                </li>
                <li className={style.item}>
                    <a href='/music'>Music</a>
                </li>
                <li className={style.item}>
                    <a href='/settings'>Settings</a>
                </li>
             </ul>
        </nav>
    );
}

export default Navbar;
