import React from "react";
import s from "./Cart.module.css"

let EmptyCart = (props) => {
    return (
        <div className={s.empty}>
            <p>В корзине нет товаров</p>
        </div>
    )
}

export default EmptyCart