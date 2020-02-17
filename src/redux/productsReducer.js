const ON_CHANGE_TO_BUY = 'ON-CHANGE-TO-BUY';
const ADD_TO_CART = 'ADD-TO-CART';
const SET_CATALOG = 'SET-CATALOG';
const CLEAR_CART = 'CLEAR-CART';

const initState = {
    catalog: [],

    get cart() {
        if (localStorage.getItem('cart') !== null) {
            return JSON.parse(localStorage.getItem('cart'));
        } else return { items: [], totalQty: 0, totalSum: 0 };
    }

};


export default function productReducer(prevState = initState, action) {
    let state;

    switch (action.type) {

        case ON_CHANGE_TO_BUY:
            return {
                ...prevState,
                catalog: prevState.catalog.map(item => {
                    if (item.id === action.id) {
                        item.qty = action.qty;
                        item.sum = item.qty * item.price;
                    }

                    return item;
                })
            };

        case ADD_TO_CART:
            state = {
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

            state.cart.totalQty += action.qty;
            state.cart.totalSum += action.sum;

            localStorage.setItem('cart', JSON.stringify(state.cart));
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

        default:
            return prevState;
    }
}

export const addToCartAC = (item, qty) => ({ type: ADD_TO_CART, item, qty: +qty })
export const onChangeToBuyAC = (id, qty) => ({ type: ON_CHANGE_TO_BUY, id, qty })
export const setCatalogAC = catalog => ({ type: SET_CATALOG, catalog })
export const clearCartAC = () => ({ type: CLEAR_CART })