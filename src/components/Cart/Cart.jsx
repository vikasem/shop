import React from "react";
import Order from "./Order";
import s from "./Cart.module.css"
let Cart = (props) => {
    return (
        <div className={s.cart}>
            {props.orders.map(el => (
                <Order item={el} />
            ))}
        </div>
    )
}

export default Cart 