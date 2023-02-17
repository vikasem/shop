import React from "react"
import CarouselGoods from "./CarouselGoods"
import s from "./Main.module.css"

let Main = (props) => {
    let portionSize = 6
    return (
        <main>
            <div className={s.presentation}></div>
            
            <div>
                <CarouselGoods items={props.items} portionSize={portionSize} addOrderSuccess={props.addOrderSuccess} orders={props.orders}/>
            </div>
            
        </main>
    )
}

export default Main