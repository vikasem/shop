import React from "react";
import Order from "./Order";
import s from "./Cart.module.css"

let EmptyCart = (props) => {
    return (
        <div className={s.empty}>
            <p>В корзине нет товаров</p>
        </div>
    )
}

let FullCart = (props) => {
    let countSum = () => {
        let amountOfGoods = 0;
        props.orders.forEach(el => {
            amountOfGoods += el.price
        })
        return amountOfGoods
    }

    return (
        <div className={s.cart}>
            <div className={s.cartOrder}>
                <div className={s.cartTitle}>
                    <span className={s.cartName}>Корзина</span>
                    {/* <span className={s.sumItems}>{props.orders.length} товара</span> */}
                </div>
                {
                    props.orders.map(el => (<Order key={el.id} item={el} deleteOrderSuccess={props.deleteOrderSuccess} />))
                }
            </div>
            <div>
                <div className={s.ordering}>
                    <p className={s.nameOrdering}>Оформление заказа</p>
                    <div className={s.location}>
                        <p className={s.sum}>Товары на сумму</p>
                        <p className={s.sumPrice}>{countSum()} ₽</p>
                    </div>
                    <div className={s.location}>
                        <p className={s.discount}>Скидка</p>
                        <p className={s.discountPrice}>0 ₽</p>
                    </div>
                    <div className={s.location}>
                        <p className={s.total}>Итого</p>
                        <p className={s.totalPrice}>{countSum()} ₽</p>
                    </div>
                    <div className={s.payment}>Перейти к оплате</div>
                </div>
            </div>
        </div>
    )
}

let Cart = (props) => {
    return (
        <div>
            {props.orders.length > 0 ?
                <FullCart orders={props.orders} deleteOrderSuccess={props.deleteOrderSuccess}/> :
                <EmptyCart />
            }
        </div>
    )
}

export default Cart 