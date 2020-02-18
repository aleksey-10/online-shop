import PriceBlock from "./PriceBlock";
import { connect } from "react-redux";
import { addToCart, onChangeToBuy } from './../../../../redux/productsReducer';

let mapStateToProps = (state, ownProps) => ({
    item: ownProps.item,
    catalog: state.products.catalog
})

export default connect(mapStateToProps, {addToCart, onChangeToBuy})(PriceBlock);