
import { connect } from 'react-redux';
import Cart from './Cart';
import { clearCartTC } from './../../../redux/productsReducer';

let mapStateToProps = state => ({
    cart: state.products.cart
});

export default connect(mapStateToProps, {clearCartTC})(Cart);