import { addToCartActionCreator } from '../../../../../redux/productsReducer';
import AddToCart from './AddToCart';
import { connect } from 'react-redux';

let mapStateToProps = () => {
    return {
        
    }
}

let mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: () => {
            dispatch(addToCartActionCreator(ownProps.item.id, ownProps.item.qty)) 
        }
    }
} 

const AddToCartContainer = connect(mapStateToProps, mapDispatchToProps)(AddToCart);

export default AddToCartContainer;