import InputQty from './InputQty';
import { connect } from 'react-redux';
import { onChangeToBuyAC } from './../../../../../redux/productsReducer';

let mapStateToProps = (state, ownProps) => {
    return {
        qty: ownProps.item.qty
    }
}

let mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeQty: (event) => {
            dispatch(onChangeToBuyAC(ownProps.item.id, event.target.value))
        }
    }
}

const InputQtyContainer = connect(mapStateToProps, mapDispatchToProps)(InputQty);

export default InputQtyContainer;