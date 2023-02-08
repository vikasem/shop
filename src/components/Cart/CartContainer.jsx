import { connect } from "react-redux"
import Cart from "./Cart"

let mapStateToProps = (state) => {
    return {
        orders: state.cartPage.orders
    }
}

let CartContainer = connect(mapStateToProps,{})(Cart)

export default CartContainer