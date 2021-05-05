import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={`${style.item} ${style.visited}`}>HTML</li>
                <li className={style.item}>CSS</li>
                <li className={style.item}>JS</li>
                <li className={style.item}>React</li>
            </ul>
        </nav>
    );
}

export default Navbar;
