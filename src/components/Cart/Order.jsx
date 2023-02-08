import React from "react";
import s from "./Cart.module.css"

let Order = (props) => {
    return (
        <div className={s.item}>
            <img src={"./img/" + props.item.photo}></img>
            <h2 className={s.price}>{props.item.price} ₽</h2>
            <p className={s.name}>{props.item.category}</p>
        </div>
    )
}

export default Order