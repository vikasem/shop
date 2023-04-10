import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import cartReducer from "./cartReducer.tsx";
// import {reducer as formReducer} from 'redux-form'
import menuReducer from "./menuReducer.tsx";

let reducers = combineReducers({
  menuPage: menuReducer,
  cartPage: cartReducer,
})

type ReducerType = typeof reducers
export type AppStateType = ReturnType<ReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
//@ts-ignore
window.__store__ = store

export default store