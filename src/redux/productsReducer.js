import { ON_CHANGE_TO_BUY, ADD_TO_CART, SET_CATALOG, CLEAR_CART, REMOVE_CART_ITEM, ON_CHANGE_CART_QTY, CALC_TOTAL, SET_LS } from "./reducerTypes";
import productsAPI from "../api/api";

const initState = {
    catalog: [],

    get cart() {
        if (localStorage.getItem('cart') !== null) {
            return JSON.parse(localStorage.getItem('cart'));
        } else return { items: [], totalQty: 0, totalSum: 0 };
    }

};


export default function productReducer(prevState = initState, action) {

    switch (action.type) {

        case ON_CHANGE_TO_BUY:
            return {
                ...prevState,
                catalog: prevState.catalog.map(item => {
                    if (item.id === action.id) {
                        item.qty = action.qty;
                        item.sum = action.qty * item.price;
                    }

                    return item;
                })
            };

        case ADD_TO_CART:
            const state = {
                ...prevState,
                catalog: prevState.catalog.map(item => {
                    if (item.id === action.item.id) {
                        item.qty = 1; item.sum = item.price;
                        action.sum = item.price * action.qty;
                    }
                    return item;
                }),
                cart: { ...prevState.cart }
            };

            if (!state.cart.items.filter(item => item.id === action.item.id).length) {
                state.cart.items.push({ ...action.item, qty: action.qty, sum: action.sum });
            } else {
                state.cart.items.map(item => {
                    if (item.id === action.item.id) { item.qty += action.qty; item.sum += action.sum; }
                    return item;
                });
            }

            return state;

        case SET_CATALOG:
            return {
                ...prevState,
                catalog: action.catalog
            };

        case CLEAR_CART:
            localStorage.removeItem('cart');
            return {
                ...prevState,
                cart: { items: [], totalQty: 0, totalSum: 0 }
            };

        case REMOVE_CART_ITEM:
            return {
                ...prevState,
                cart: {
                    ...prevState.cart,
                    items: prevState.cart.items.filter(item => item.id !== action.id)
                }
            }

        case ON_CHANGE_CART_QTY:
            return {
                ...prevState,
                cart: {
                    items: prevState.cart.items.map(item => {
                        if (item.id === action.id) {
                            item.qty = action.qty;
                            item.sum = action.qty * item.price;
                        }
                        return item;
                    })
                }
            }

        case CALC_TOTAL:
            return {
                ...prevState,
                cart: {
                    ...prevState.cart,
                    totalQty: prevState.cart.items.reduce((sum, item) => sum += item.qty, 0),
                    totalSum: prevState.cart.items.reduce((sum, item) => sum += item.sum, 0)
                }
            }

        case SET_LS:
            localStorage.setItem('cart', JSON.stringify(prevState.cart));
            return prevState;

        default:
            return prevState;
    }

}

export const addToCart = (item, qty) => ({ type: ADD_TO_CART, item, qty: +qty })
export const onChangeToBuy = (id, qty) => ({ type: ON_CHANGE_TO_BUY, id, qty })
export const setCatalog = catalog => ({ type: SET_CATALOG, catalog })
export const clearCartAC = () => ({ type: CLEAR_CART })
export const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, id })
export const onChangeCartQty = (id, qty) => ({ type: ON_CHANGE_CART_QTY, id, qty: +qty })
export const setLs = () => ({ type: SET_LS })
export const calcTotal = () => ({ type: CALC_TOTAL })

export const getProductsThunkCreator = () => dispatch => {
    productsAPI.getCatalog().then(data => dispatch(setCatalog(data.catalog)));
}

export const addToCartTC = (item, qty) => dispatch => {
    dispatch(addToCart(item, qty));
    dispatch(calcTotal());
    dispatch(setLs());
}

export const setCartItemTC = (id, value) => dispatch => {
    dispatch(onChangeCartQty(id, value));
    dispatch(calcTotal());
    dispatch(setLs());
}

export const removeCartItemTC = id => dispatch => {
    dispatch(removeCartItem(id));
    dispatch(calcTotal());
    dispatch(setLs());
}

export const clearCartTC = () => dispatch => {
    dispatch(clearCartAC());
    dispatch(setLs());
}