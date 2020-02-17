
import { connect } from 'react-redux';
import Cart from './Cart';
import { clearCartAC } from './../../../redux/productsReducer';

let mapStateToProps = state => ({
    cart: state.products.cart
});

let mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCartAC())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);