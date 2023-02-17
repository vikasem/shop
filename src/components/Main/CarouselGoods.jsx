import React from "react"
import { useState } from "react";
import ItemCarousel from "./ItemCarousel";
import s from "./Carousel.module.css"

let CarouselGoods = (props) => {
    let totalCount = props.items.length
    let portionCount = Math.floor(totalCount / props.portionSize);

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber = portionNumber * props.portionSize
    return (
        <div>
            {portionNumber > 1 &&
                <div onClick={() => { setPortionNumber(portionNumber - 1) }}>туда</div>}
            <div className={s.carouselItems}>
                {props.items
                    .filter(el => el.id >= leftPortionNumber && el.id <= rightPortionNumber)
                    .map(el => (
                        <ItemCarousel item={el} />
                    ))
                }
            </div>
            {portionNumber < portionCount &&
                <div onClick={() => { setPortionNumber(portionNumber + 1) }}>сюда</div>}
        </div>
    )
}

export default CarouselGoods