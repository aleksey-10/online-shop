import React from 'react';
import { connect } from "react-redux";
import Product from './Product';
import NotFound from '../../../common/NotFound';

class ProductContainer extends React.Component {
    render() {
        return !this.props.item ? <NotFound /> :  <Product item={this.props.item} />
    }
}

let mapStateToProps = (state, ownProps) => ({
    item: state.products.catalog.filter( item => ownProps.id === item.id)[0]
})

export default connect(mapStateToProps)(ProductContainer);