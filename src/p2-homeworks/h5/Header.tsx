import React from 'react'
import { Link } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    let [menuMode, setMenuMode] = React.useState<boolean>(true);

    function controllMenu() {
        setMenuMode(!menuMode);
    }

    let menuClass = `${s.menu_links} ${menuMode ? s.unvisible : s.visible}`
    let buttonClass = `${s.menu_button} ${menuMode ? s.unvisible : s.visible}`;

    return (
        <nav className={s.menu}>
            <div className={menuClass} >
                <span className={s.span_link}><Link to={'/pre-junior'}>pre-junior</Link></span>
                <span className={s.span_link}><Link to={'/junior'}>junior</Link></span>
                <span className={s.span_link}><Link to={'/junior-plus'}>junior-plus</Link></span>
            </div>
            <div className={buttonClass} onClick={controllMenu}></div>
        </nav>
    )
}

export default Header
