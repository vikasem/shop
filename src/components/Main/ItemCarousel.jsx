import React from "react";
import s from "./Carousel.module.css"

let ItemCarousel = (props) => {
    return(
        <div className={s.item}>
            <img src={"./img/" + props.item.photo}></img>
            <h2 className={s.price}>{props.item.price} ₽</h2>
            <p className={s.name}>{props.item.category}</p>
            {/* <span className={s.addCart} onClick={() => {addOrder(props.item)}}>В корзину</span> */}
        </div>
    )
}

export default ItemCarousel