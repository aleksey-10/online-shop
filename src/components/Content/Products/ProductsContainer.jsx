import Products from './Products';
import { connect } from 'react-redux';

let mapStateToProps = state => {
    return {
        catalog: state.products.catalog
    }
}

const ProductsContainer = connect(mapStateToProps)(Products);

export default ProductsContainer;