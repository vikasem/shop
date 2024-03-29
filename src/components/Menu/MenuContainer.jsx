import { connect } from "react-redux";
import Menu from "./Menu.tsx";
import { addOrderSuccess } from "../../redux/cartReducer.ts";
import { filterByCategory, showAllSuccess } from "../../redux/menuReducer.ts";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router";
import { useEffect } from 'react';

let mapStateToProps = (state) => {
    return {
        items: state.menuPage.items,
        orders: state.cartPage.orders,
        category: state.menuPage.category,
        filterItems: state.menuPage.filterItems,
    }
}

let MenuContainer = (props) => {
    let params = useParams();
    useEffect(()=> {
        let category_name = params.categoryName
        if (category_name){
            props.filterByCategory(category_name)
        }
    },[params.categoryName])
    return(
        <Menu items={props.items}
        orders={props.orders}
        category={props.category}
        filterItems={props.filterItems}
        addOrderSuccess={props.addOrderSuccess}
        showAllSuccess={props.showAllSuccess}
        />
    )
}

export default connect(mapStateToProps,{addOrderSuccess, filterByCategory, showAllSuccess})(MenuContainer)