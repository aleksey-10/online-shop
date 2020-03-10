import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./productsReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    products: productReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;