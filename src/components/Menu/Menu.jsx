import Item from "./Item"
import s from "./Menu.module.css"

let Menu = (props) => {
    return (
        <main className={s.menuBlock}>
            <div className={s.category}>
                <div className={s.clothesName}>ОДЕЖДА</div>
                {props.category.map(el=> (
                        <div className={s.nameCategory}>{el.name}</div>))
                } 
            </div>
            <div className={s.menu} >
                {props.items.map(el => (
                    <Item key={el.id} item={el} addOrderSuccess={props.addOrderSuccess} orders={props.orders} />
                ))}
            </div>
        </main>
    )
}

export default Menu