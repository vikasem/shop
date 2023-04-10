import React, { FC } from "react";
import { ItemsType } from "../../types/types";
import Item from "./Item.tsx"
import s from "./Menu.module.css"

type PropsType = {
    filterItems: any
    orders: Array<ItemsType>
    addOrderSuccess: (order:ItemsType) => void
}

let MenuCards:FC<PropsType> = ({addOrderSuccess, orders, filterItems}) => {
    return (
        <div className={s.menu} >
            {filterItems.map(el => (
                <Item key={el.id} item={el} addOrderSuccess={addOrderSuccess} orders={orders} />
            ))}
        </div>
    )
}

export default MenuCards