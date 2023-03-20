import { connect } from "react-redux";
import Menu from "./Menu";
import { addOrderSuccess } from "../../redux/cartReducer";
import { filterByCategorySuccess, showAllSuccess } from "../../redux/menuReducer";
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
    console.log(params);
    useEffect(()=> {
        let category_name = params.categoryName
        if (category_name){
            props.filterByCategorySuccess(category_name)
        }
    },[params.categoryName])
    return(
        <Menu items={props.items}
        orders={props.orders}
        category={props.category}
        filterItems={props.filterItems}
        addOrderSuccess={props.addOrderSuccess}
        filterByCategorySuccess={props.filterByCategorySuccess}
        showAllSuccess={props.showAllSuccess}
        />
    )
}

export default connect(mapStateToProps,{addOrderSuccess, filterByCategorySuccess, showAllSuccess})(MenuContainer)