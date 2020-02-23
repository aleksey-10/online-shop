import React from 'react';
import FormModal from './FormModal';
import { submitPurchase } from './../../../../redux/productsReducer';
import { connect } from 'react-redux';

class FormModalContainer extends React.Component {
    render () {
        return <FormModal submitPurchase={this.props.submitPurchase} cart={this.props.cart} />
    }
}

const mapStateToProps = state => ({
    cart: state.products.cart
})

export default connect(mapStateToProps, {submitPurchase})(FormModalContainer);

