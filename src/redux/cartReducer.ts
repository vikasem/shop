import { ItemsType } from './../types/types';

const ADD_ORDER_SUCCESS = 'cart/ADD_ORDER_SUCCESS'
const DELETE_ORDER_SUCCESS = 'cart/DELETE_ORDER_SUCCESS'

let initialState = {
    orders: [] as Array<ItemsType>
}

type InitialStateType = typeof initialState 

let cartReducer = (state = initialState, action:any):InitialStateType => {
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

type addOrderAtionType = {
    type: typeof ADD_ORDER_SUCCESS,
    order: ItemsType
} 

type deleteOrderActionType = {
    type: typeof DELETE_ORDER_SUCCESS,
    id: number
}

export let addOrderSuccess = (order:ItemsType):addOrderAtionType => ({ type: ADD_ORDER_SUCCESS, order })
export let deleteOrderSuccess = (id:number):deleteOrderActionType => ({type: DELETE_ORDER_SUCCESS, id})


export default cartReducer