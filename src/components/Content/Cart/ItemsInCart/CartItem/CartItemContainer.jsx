import { connect } from "react-redux";
import CartItem from "./CartItem";
import { removeCartItem, onChangeCartQty } from './../../../../../redux/productsReducer';

let mapStateToProps = (state, ownProps) => ({
    item: ownProps.item,
    cart: state.products.cart
})

export default connect(mapStateToProps, { removeCartItem, onChangeCartQty })(CartItem);
