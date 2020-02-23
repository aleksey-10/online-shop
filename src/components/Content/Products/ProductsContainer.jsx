import React from 'react';
import Products from './Products';
import { connect } from 'react-redux';
import Preloader from './../../common/Preloader';
import ProductContainer from './Product/ProductContainer';
import { withRouter } from 'react-router-dom';
import { getProductsThunkCreator } from '../../../redux/productsReducer';
import { compose } from 'redux';

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProductsThunkCreator();
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

export default compose(
    connect(mapStateToProps, {getProductsThunkCreator}),
    withRouter
)(ProductsContainer);
