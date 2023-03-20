import React from "react";
import Item from "./Item"
import s from "./Menu.module.css"

let MenuCards = (props) => {
    return (
        <div className={s.menu} >
            {props.filterItems.map(el => (
                <Item key={el.id} item={el} addOrderSuccess={props.addOrderSuccess} orders={props.orders} />
            ))}
        </div>
    )
}

export default MenuCards