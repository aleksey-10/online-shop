
import { connect } from 'react-redux';
import Cart from './Cart';
import { clearCartTC, submitPurchase } from './../../../redux/productsReducer';

let mapStateToProps = state => ({
    cart: state.products.cart
});

export default connect(mapStateToProps, {clearCartTC, submitPurchase})(Cart);