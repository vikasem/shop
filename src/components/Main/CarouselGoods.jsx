import React from "react"
import { useState } from "react";
import ItemCarousel from "./ItemCarousel";
import s from "./Carousel.module.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

let CarouselGoods = (props) => {
    let totalCount = props.items.length
    let portionCount = Math.floor(totalCount / props.portionSize);

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber = portionNumber * props.portionSize
    return (
        <div>
            <div className={s.popular}>Популярное</div>
            <div className={s.carousel}>
                {portionNumber > 1 &&
                    <AiOutlineLeft className={s.buttonLeft} onClick={() => { setPortionNumber(portionNumber - 1) }} />}
                <div className={s.carouselItems}>
                    {props.items
                        .filter(el => el.id >= leftPortionNumber && el.id <= rightPortionNumber)
                        .map(el => (
                            <ItemCarousel item={el} key={el.id} />
                        ))
                    }
                </div>
                {portionNumber < portionCount &&
                    <AiOutlineRight className={s.buttonRight} onClick={() => { setPortionNumber(portionNumber + 1) }} />}
            </div>
        </div>

    )
}

export default CarouselGoods