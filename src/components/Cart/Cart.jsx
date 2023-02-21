import React from "react";
import s from "./Cart.module.css"
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

let Cart = (props) => {
    return (
        <div>
            {props.orders.length > 0 ?
                <FullCart orders={props.orders} deleteOrderSuccess={props.deleteOrderSuccess}/> :
                <EmptyCart />
            }
        </div>
    )
}

export default Cart 