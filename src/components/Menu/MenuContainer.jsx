import { connect } from "react-redux";
import Menu from "./Menu";
import { addOrderSuccess } from "../../redux/cartReducer";
import { filterByCategorySuccess, showAllSuccess } from "../../redux/menuReducer";

let mapStateToProps = (state) => {
    return {
        items: state.menuPage.items,
        orders: state.cartPage.orders,
        category: state.menuPage.category,
        filterItems: state.menuPage.filterItems,
    }
}

let MenuContainer = connect(mapStateToProps,{addOrderSuccess, filterByCategorySuccess, showAllSuccess})(Menu)

export default MenuContainer