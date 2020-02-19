import React from 'react';
import Products from './Products';
import { connect } from 'react-redux';
import { setCatalog } from '../../../redux/productsReducer';
import * as axios from 'axios';
import Preloader from './../../common/Preloader';
import ProductContainer from './Product/ProductContainer';
import { withRouter } from 'react-router-dom';

class ProductsAPI extends React.Component {
    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/aleksey-10/online-store/db")
            .then(response => this.props.setCatalog(response.data.catalog));
    }

    render() {        
        if (!this.props.catalog.length) return <Preloader />

        if (!this.props.match.params.productId) return <Products catalog={this.props.catalog} />

        return <ProductContainer id={+this.props.match.params.productId} />            
    }
}

let mapStateToProps = state => {
    return {
        catalog: state.products.catalog
    }
}

const ProductsContainer = connect(mapStateToProps, { setCatalog })(withRouter(ProductsAPI));

export default ProductsContainer;