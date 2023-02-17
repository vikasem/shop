import Item from "./Item"
import s from "./Menu.module.css"

let Menu = (props) => {
    let filterByCategory = (category) => {
        props.filterByCategorySuccess(category)
    }
    let showAll = () => {
        props.showAllSuccess()
    }
    return (
        <main className={s.menuBlock}>
            <div className={s.category}>
                <div className={s.clothesName} onClick={()=>{showAll()}}>ОДЕЖДА</div>
                {props.category.map(el=> (
                        <div className={s.nameCategory} onClick={()=>{filterByCategory(el.name)}}>{el.name}</div>))
                } 
            </div>
            <div className={s.menu} >
                {props.filterItems.map(el => (
                    <Item key={el.id} item={el} addOrderSuccess={props.addOrderSuccess} orders={props.orders} />
                ))}
            </div>
        </main>
    )
}

export default Menu