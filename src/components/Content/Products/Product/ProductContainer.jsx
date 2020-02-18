import { connect } from "react-redux";
import Product from './Product';

let mapStateToProps = (state, ownProps) => ({
    item: state.products.catalog.filter( item => ownProps.id === item.id)[0]
})

export default connect(mapStateToProps)(Product);