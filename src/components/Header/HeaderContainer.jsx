import { showAllSuccess } from "../../redux/menuReducer.ts";
import { connect } from "react-redux";
import Header from "./Header"

let mapStateToProps = (state) => {
    return {

    }
}

let HeaderContainer = connect(mapStateToProps,{showAllSuccess})(Header)

export default HeaderContainer