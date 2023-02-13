import React from "react";
import s from "./Cart.module.css"

let Order = (props) => {
    let deleteOrder = (id) => {
        console.log(id)
        props.deleteOrderSuccess(id)
    }
    return (
        <div className={s.item}>
            <img src={"./img/" + props.item.photo}></img>
            <div className={s.info}>
                <h2 className={s.price}>{props.item.price} ₽</h2>
                <p className={s.name}>{props.item.category}</p>
                <p className={s.color}>{props.item.color}</p>
                <p className={s.sizeModel}><span className={s.styleNumber}>{props.item.sizeModel}</span> RUS</p>
                <span className={s.deleteOrder} onClick={()=>{deleteOrder(props.item.id)}}>Удалить</span>
            </div>
        </div>
    )
}

export default Order