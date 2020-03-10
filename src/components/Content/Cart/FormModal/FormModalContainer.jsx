import React from 'react';
import { submitPurchase } from './../../../../redux/productsReducer';
import { connect } from 'react-redux';
import FormModalBody from './FormModalBody/FormModalBody';

class FormModalContainer extends React.Component {
    render() {
        return <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Fill in the data for feedback</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <FormModalBody
                        {...this.props}
                        onSubmit={() => this.props.submitPurchase(this.props.cart)}
                    />
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    cart: state.products.cart
})


export default connect(mapStateToProps, { submitPurchase })(FormModalContainer)
