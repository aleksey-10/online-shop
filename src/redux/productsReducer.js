const initState = {
    catalog: [],

    get cart() {
        if (localStorage.getItem('cart') !== null) {
            return JSON.parse(localStorage.getItem('cart'));
        } else return {
            items: [],
            totalQty: 0,
            totalSum: 0
        };
    }
};


export default function productReducer(prevState = initState, action) {
    let state;

    switch (action.type) {

        case 'ON-CHANGE-TO-BUY':
            return {
                ...prevState,
                catalog: prevState.catalog.map(item => {
                    if (item.id === action.id) {
                        item.qty = action.qty;
                        item.sum = item.qty*item.price;
                    }

                    return item;
                })
            };

        case 'ADD-TO-CART':
            state = {
                ...prevState,
                catalog: [...prevState.catalog],
                cart: { ...prevState.cart }
            };

            state.catalog.map(item => {
                if (item.id === action.id) {
                    item.qty = 1; item.sum = item.price;
                    action.sum = item.price * action.qty;
                }
            });

            if (!state.cart.items.filter(item => item.id === action.id).length) {
                state.cart.items.push({ id: action.id, qty: action.qty, sum: action.sum });
            } else {
                state.cart.items.map(item => {
                    if (item.id === action.id) { item.qty += action.qty; item.sum += action.sum; }
                });
            }

            state.cart.totalQty += action.qty;
            state.cart.totalSum += action.sum;

            localStorage.setItem('cart', JSON.stringify(state.cart));
            return state;

        case 'SET-CATALOG':
            return {
                ...prevState,
                catalog: action.catalog
            }

        default:
            return prevState;
    }
}

export const addToCartActionCreator = (id, qty) => ({ type: 'ADD-TO-CART', id, qty: +qty });
export const onChangeToBuyActionCreator = (id, qty) => ({ type: 'ON-CHANGE-TO-BUY', id, qty });
export const setCatalogAction = catalog => ({ type: 'SET-CATALOG', catalog });
