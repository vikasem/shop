import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { CategoryType } from "../../types/types";
import s from "./Menu.module.css"

type PropsType = {
    showAllSuccess: () => void
    category: Array<CategoryType>
}

let MenuBlock:FC<PropsType> = ({showAllSuccess, category}) => {
    let showAll = () => {
        showAllSuccess()
    }
    return (
        <div className={s.category}>
            <NavLink to={'/menu'}>
                <div className={s.clothesName} onClick={() => { showAll() }}>ОДЕЖДА</div>
            </NavLink>

            {category.map(el => (
                <NavLink to={'/menu/' + el.nameEng}>
                    <span className={s.nameCategory}>{el.name}</span>
                </NavLink>))
            }
        </div>
    )
}

export default MenuBlock