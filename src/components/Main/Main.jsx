import React from "react"
import CarouselGoods from "./CarouselGoods"
import s from "./Main.module.css"
import { useEffect } from 'react';


let Main = (props) => {
    useEffect(()=> {
        props.loadItems();
        props.loadCategory();
    },[])
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