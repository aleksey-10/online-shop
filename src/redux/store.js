import { createStore, combineReducers } from "redux";
import productReducer from './productsReducer';

let reducers = combineReducers({
    products: productReducer
});

let store = createStore(reducers);

export default store;