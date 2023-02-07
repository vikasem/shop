import Item from "./Item"
import s from "./Menu.module.css"

let Menu = (props) => {
    return (
        <main className={s.menu}>
            {props.items.map(el => (
                <Item item={el} />
            ))}
        </main>
    )
}

export default Menu