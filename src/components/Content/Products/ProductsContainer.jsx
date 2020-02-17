import React from 'react';
import Products from './Products';
import { connect } from 'react-redux';
import { setCatalogAC } from '../../../redux/productsReducer';
import * as axios from 'axios';
import Loader from '../Loader/Loader';

class ProductsAPI extends React.Component {
    componentDidMount() {
        
        axios.get("https://my-json-server.typicode.com/aleksey-10/online-store/db")
            .then(response => this.props.setCatalog(response.data.catalog));
    }

    render() {
        return !this.props.catalog.length ? <Loader /> : <Products catalog={this.props.catalog} />
    }
}

let mapStateToProps = state => {
    return {
        catalog: state.products.catalog
    }
}

let mapDispatchToProps = dispatch => {
    return {
        setCatalog: catalogData => dispatch(setCatalogAC(catalogData))
    }
}


const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsAPI);

export default ProductsContainer;