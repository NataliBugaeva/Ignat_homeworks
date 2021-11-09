import React from 'react'
import s from './Header.module.css';
import {PATH} from "./AllRoutes";
import {NavLink} from 'react-router-dom';

function Header() {
    let [menuMode, setMenuMode] = React.useState<boolean>(true);

    function controllMenu() {
        setMenuMode(!menuMode);
    }

    let menuClass = `${s.menu_links} ${menuMode ? s.unvisible : s.visible}`
    let buttonClass = `${s.menu_button} ${menuMode ? s.unvisible : s.visible}`;

    return (
        <nav className={s.menu}>
            <div className={menuClass}>
                <span><NavLink to={PATH.PRE_JUNIOR}
                               className={(navData) => navData.isActive ? s.active : s.span_link}>pre-junior</NavLink></span>
                <span><NavLink to={PATH.JUNIOR}
                               className={(navData) => navData.isActive ? s.active : s.span_link}>junior</NavLink></span>
                <span><NavLink to={PATH.JUNIOR_PLUS}
                               className={(navData) => navData.isActive ? s.active : s.span_link}>junior-plus</NavLink></span>
            </div>
            <div className={buttonClass} onClick={controllMenu}></div>
        </nav>
    )
}

export default Header
