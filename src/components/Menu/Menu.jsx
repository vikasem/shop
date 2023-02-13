import Item from "./Item"
import s from "./Menu.module.css"

let Menu = (props) => {
    return (
        <main className={s.menu}>
            {props.items.map(el => (
                <Item key={el.id} item={el} addOrderSuccess={props.addOrderSuccess} orders={props.orders} />
            ))}
        </main>
    )
}

export default Menu