import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./productsReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    products: productReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;