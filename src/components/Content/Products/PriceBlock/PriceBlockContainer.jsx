import PriceBlock from "./PriceBlock";
import { connect } from "react-redux";
import { onChangeToBuy, addToCartTC } from './../../../../redux/productsReducer';

let mapStateToProps = (state, ownProps) => ({
    item: ownProps.item,
    catalog: state.products.catalog
})

export default connect(mapStateToProps,
    { onChangeToBuy, addToCartTC })(PriceBlock);