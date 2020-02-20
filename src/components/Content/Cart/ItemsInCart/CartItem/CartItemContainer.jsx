import { connect } from "react-redux";
import CartItem from "./CartItem";
import {setCartItemTC, removeCartItemTC } from './../../../../../redux/productsReducer';

let mapStateToProps = (state, ownProps) => ({
    item: ownProps.item,
    cart: state.products.cart
})

export default connect(mapStateToProps, 
    { removeCartItemTC, setCartItemTC })(CartItem);
