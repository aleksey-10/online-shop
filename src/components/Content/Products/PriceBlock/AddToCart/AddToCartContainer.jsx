import { addToCart } from '../../../../../redux/productsReducer';
import AddToCart from './AddToCart';
import { connect } from 'react-redux';

let mapStateToProps = () => {
    return {
        
    }
}

const AddToCartContainer = connect(mapStateToProps, {addToCart})(AddToCart);

export default AddToCartContainer;