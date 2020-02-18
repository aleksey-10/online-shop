import InputQty from './InputQty';
import { connect } from 'react-redux';
import { onChangeToBuy, addToCart } from './../../../../../redux/productsReducer';

let mapStateToProps = (state, ownProps) => {
    return {
        qty: ownProps.item.qty
    }
}

const InputQtyContainer = connect(mapStateToProps, {onChangeToBuy, addToCart})(InputQty);

export default InputQtyContainer;