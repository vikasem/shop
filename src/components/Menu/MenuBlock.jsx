import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css"

let MenuBlock = (props) => {
    let showAll = () => {
        props.showAllSuccess()
    }
    return (
        <div className={s.category}>
            <NavLink to={'/menu'}>
                <div className={s.clothesName} onClick={() => { showAll() }}>ОДЕЖДА</div>
            </NavLink>

            {props.category.map(el => (
                <NavLink to={'/menu/' + el.nameEng}>
                    <span className={s.nameCategory}>{el.name}</span>
                </NavLink>))
            }
        </div>
    )
}

// onClick={() => { filterByCategory(el.name) }}

export default MenuBlock