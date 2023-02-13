import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { addOrderSuccess } from "../../redux/cartReducer";

let mapStateToProps = (state) => {
    return {
        items: state.menuPage.items,
        orders: state.cartPage.orders,
        category: state.menuPage.category,
    }
}

let MenuContainer = connect(mapStateToProps,{addOrderSuccess})(Menu)

export default MenuContainer