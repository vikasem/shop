import React, { FC } from "react"
import { ItemsType } from "../../types/types"
import s from "./Menu.module.css"

type PropsType ={
    item: any
    orders: Array<ItemsType>
    addOrderSuccess: (order:ItemsType) => void
}

let Item:FC<PropsType> = ({orders, addOrderSuccess, item }) => {

    let addOrder = (order) => {
        let isInArray = false 
        orders.forEach((el: { id: number }) => {
            if (el.id === order.id){
                isInArray = true 
            }
        })
        if(!isInArray) {
            addOrderSuccess(order)
        }
    }
    return(
        <div className={s.item}>
            <img src={"/img/" + item.photo}></img>
            <h2 className={s.price}>{item.price} ₽</h2>
            <p className={s.name}>{item.category}</p>
            <span className={s.addCart} onClick={() => {addOrder(item)}}>В корзину</span>
        </div>
    )
}

export default Item

