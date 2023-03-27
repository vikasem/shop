import s from "./Menu.module.css"
import MenuBlock from "./MenuBlock"
import MenuCards from "./MenuCards"

let Menu = (props) => {
    return (
        <main className={s.menuBlock}>
            {/* <div className={s.category}>
                <div className={s.clothesName} onClick={()=>{showAll()}}>ОДЕЖДА</div>
                {props.category.map(el=> (
                        <div className={s.nameCategory} onClick={()=>{filterByCategory(el.name)}}>{el.name}</div>))
                } 
            </div> */}
            {/* <div className={s.menu} >
                {props.filterItems.map(el => (
                    <Item key={el.id} item={el} addOrderSuccess={props.addOrderSuccess} orders={props.orders} />
                ))}
            </div> */}
            <MenuBlock showAllSuccess={props.showAllSuccess} category={props.category}/>
            <MenuCards filterItems={props.filterItems} addOrderSuccess={props.addOrderSuccess} orders={props.orders} />
        </main>
    )
}

export default Menu