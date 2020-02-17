import { addToCartAC } from '../../../../../redux/productsReducer';
import AddToCart from './AddToCart';
import { connect } from 'react-redux';

let mapStateToProps = () => {
    return {
        
    }
}

let mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: () => {
            dispatch(addToCartAC(ownProps.item, ownProps.item.qty)) 
        }
    }
} 

const AddToCartContainer = connect(mapStateToProps, mapDispatchToProps)(AddToCart);

export default AddToCartContainer;