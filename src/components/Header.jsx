import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

let Header = (props) => {
    return (
        <header>
            <div>
                <span className={s.logo}>V O G A</span>
                <nav className={s.nav}>
                    <span className={s.item}>
                        <NavLink to='/main'>Главная</NavLink>
                    </span>
                    <span className={s.item}>
                        <NavLink to='/menu'>Одежда</NavLink>
                    </span>
                    <span>Корзина</span>
                    <span>Избранное</span>
                </nav>
            </div>
        </header>
    )
}

export default Header