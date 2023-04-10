import { connect } from "react-redux"
import Cart from "./Cart"
import { deleteOrderSuccess } from "../../redux/cartReducer.ts"

let mapStateToProps = (state) => {
    return {
        orders: state.cartPage.orders
    }
}

let CartContainer = connect(mapStateToProps,{deleteOrderSuccess})(Cart)

export default CartContainer