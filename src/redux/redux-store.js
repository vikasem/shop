import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import cartReducer from "./cartReducer";
// import {reducer as formReducer} from 'redux-form'
import menuReducer from "./menuReducer";

let reducers = combineReducers({
  menuPage: menuReducer,
  cartPage: cartReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store

export default store