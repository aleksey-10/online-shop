import CartIcon from './CartIcon';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        cart: state.products.cart
    }
}

const CartIconContainer = connect(mapStateToProps)(CartIcon);

export default CartIconContainer;