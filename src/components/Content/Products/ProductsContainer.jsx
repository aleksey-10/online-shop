import Products from './Products';
import { connect } from 'react-redux';
import { setCatalogAction } from '../../../redux/productsReducer';

let mapStateToProps = state => {
    return {
        catalog: state.products.catalog
    }
}

let mapDispatchToProps = dispatch => {
    return {
        setCatalog: catalogData => dispatch(setCatalogAction(catalogData))
    }
}


const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;