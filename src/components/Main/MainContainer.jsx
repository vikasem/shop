import Main from "./Main"
import { connect } from "react-redux";
import { addOrderSuccess } from "../../redux/cartReducer";

let mapStateToProps = (state) => {
    return {
        items: state.menuPage.items,
        orders: state.cartPage.orders
    }
}

let MainContainer = connect(mapStateToProps,{addOrderSuccess})(Main)

export default MainContainer