import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";

let mapStateToProps = (state) => {
    return {
        items: state.menuPage.items
    }
}

let MenuContainer = connect(mapStateToProps,{})(Menu)

export default MenuContainer