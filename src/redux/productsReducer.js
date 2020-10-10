import { ON_CHANGE_TO_BUY, ADD_TO_CART, SET_CATALOG, CLEAR_CART, REMOVE_CART_ITEM, ON_CHANGE_CART_QTY, CALC_TOTAL, SET_LS, SORT_PRODUCTS } from "./types";
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

            if (action.qty < 1) item.qty = 0;
            if (action.qty > item.stock) item.qty = item.stock;

            item.sum = item.qty * item.price;
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
        })
      };

      const itemExist = state.cart.items.filter(item => item.id === action.item.id).length;

      !itemExist
        ? state.cart.items.push({ ...action.item, qty: action.qty, sum: action.sum })
        : state.cart.items.map(item => {
          if (item.id === action.item.id) {
            item.qty += action.qty;

            if (item.qty < 1) item.qty = 1;
            if (item.qty > item.stock) item.qty = item.stock;

            item.sum += action.sum;
          }
          return item;
        });

      return state;

    case SET_CATALOG:
      return {
        ...prevState,
        catalog: action.catalog.map(item => {
          item.qty = 1;
          item.sum = item.price;
          return item;
        })
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

              if (item.qty < 1) item.qty = 1;
              if (item.qty > item.stock) item.qty = item.stock;

              item.sum = item.qty * item.price;
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

    case SORT_PRODUCTS:
      return {
        ...prevState,
        catalog: prevState.catalog.sort((a, b) =>
          a[action.payload] < b[action.payload] ? -1 : 1)
      }

    default:
      return prevState;
  }

}

export const addToCart = (item, qty) => ({ type: ADD_TO_CART, item, qty: +qty })
export const onChangeToBuy = (id, qty) => ({ type: ON_CHANGE_TO_BUY, id, qty: +qty })
export const setCatalog = catalog => ({ type: SET_CATALOG, catalog })
export const clearCartAC = () => ({ type: CLEAR_CART })
export const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, id })
export const onChangeCartQty = (id, qty) => ({ type: ON_CHANGE_CART_QTY, id, qty: +qty })
export const setLs = () => ({ type: SET_LS })
export const calcTotal = () => ({ type: CALC_TOTAL })
export const sortProducts = payload => ({ type: SORT_PRODUCTS, payload })

export const getProductsThunkCreator = () => dispatch => {
  productsAPI.getCatalog().then(catalog => dispatch(setCatalog(catalog)));
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

export const submitPurchase = cart => dispatch => {
  cart.items.map(item => productsAPI.setStock(item.id, item.stock - item.qty));

  dispatch(clearCartAC());
  dispatch(setLs());
}