const ON_CHANGE_TO_BUY = 'ON-CHANGE-TO-BUY';
const ADD_TO_CART = 'ADD-TO-CART';
const SET_CATALOG = 'SET-CATALOG';
const CLEAR_CART = 'CLEAR-CART';
const REMOVE_CART_ITEM = 'REMOVE-CART-ITEM';
const ON_CHANGE_CART_QTY = 'ON-CHANGE-CART-QTY';

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
                        item.sum = action.qty * item.price;
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

            calcSumAndQty(state);

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
            state = {
                ...prevState,
                cart: {
                    ...prevState.cart,
                    items: prevState.cart.items.filter(item => item.id !== action.id)
                }
            }

            calcSumAndQty(state);

            return state;

        case ON_CHANGE_CART_QTY:
            state = {
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

            calcSumAndQty(state);

            return state;

        default:
            return prevState;
    }
}

export let addToCart = (item, qty) => ({ type: ADD_TO_CART, item, qty: +qty })

export let onChangeToBuy = (id, qty) => ({ type: ON_CHANGE_TO_BUY, id, qty })

export let setCatalog = catalog => ({ type: SET_CATALOG, catalog })

export let clearCartAC = () => ({ type: CLEAR_CART })

export let removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, id })

export let onChangeCartQty = (id, qty) => ({ type: ON_CHANGE_CART_QTY, id, qty: +qty })


let calcSumAndQty = state => {
    state.cart.totalQty = state.cart.items.reduce((sum, item) => sum += item.qty, 0);
    state.cart.totalSum = state.cart.items.reduce((sum, item) => sum += item.sum, 0);

    localStorage.setItem('cart', JSON.stringify(state.cart));
}