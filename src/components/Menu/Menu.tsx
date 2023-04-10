import React, { FC } from "react"
import s from "./Menu.module.css"
import MenuBlock from "./MenuBlock.tsx"
import MenuCards from "./MenuCards.tsx"
import {CategoryType, ItemsType} from "../../types/types"

type PropsType = {
    category: Array<CategoryType>
    filterItems: any
    orders: Array<ItemsType>
    addOrderSuccess: (order:ItemsType) => void
    showAllSuccess: () => void

}

let Menu: FC<PropsType> = ({showAllSuccess, category, filterItems, addOrderSuccess, orders}) => {
    return (
        <main className={s.menuBlock}>
            <MenuBlock showAllSuccess={showAllSuccess} category={category}/>
            <MenuCards filterItems={filterItems} addOrderSuccess={addOrderSuccess} orders={orders} />
        </main>
    )
}

export default Menu