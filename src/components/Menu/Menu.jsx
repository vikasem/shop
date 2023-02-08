import Item from "./Item"
import s from "./Menu.module.css"

let Menu = (props) => {
    return (
        <main className={s.menu}>
            {props.items.map(el => (
                <Item item={el} addOrderSuccess={props.addOrderSuccess} />
            ))}
        </main>
    )
}

export default Menu