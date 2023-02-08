const ADD_ORDER_SUCCESS = 'cart/ADD_ORDER_SUCCESS'

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
        default:
            return state
    }
}

export let addOrderSuccess = (order) => ({ type: ADD_ORDER_SUCCESS, order })


export default cartReducer