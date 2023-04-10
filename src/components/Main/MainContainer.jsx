import Main from "./Main"
import { connect } from "react-redux";
import { addOrderSuccess } from "../../redux/cartReducer.ts";
import { loadItems, loadCategory } from "../../redux/menuReducer.ts";


let mapStateToProps = (state) => {
    return {
        items: state.menuPage.items,
        orders: state.cartPage.orders
    }
}

let MainContainer = connect(mapStateToProps,{addOrderSuccess, loadItems, loadCategory})(Main)

export default MainContainer