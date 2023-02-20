const ADD_ORDER_SUCCESS = 'cart/ADD_ORDER_SUCCESS'
const DELETE_ORDER_SUCCESS = 'cart/DELETE_ORDER_SUCCESS'

let initialState = {
    orders: []
}

let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER_SUCCESS:
            return {
                ...state,
                orders: [...state.orders, action.order]
            }
        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                orders: state.orders.filter(el => el.id !== action.id)
            }
        default:
            return state
    }
}

export let addOrderSuccess = (order) => ({ type: ADD_ORDER_SUCCESS, order })
export let deleteOrderSuccess = (id) => ({type: DELETE_ORDER_SUCCESS, id})


export default cartReducer