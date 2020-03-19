import React from 'react';
import FormModalBody from './FormModalBody/FormModalBody';

export default props => (
    <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Fill in the data for feedback</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="modal-body">
                        <FormModalBody />
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn btn-primary" value="Send request" 
                        // onClick={event => {
                        //     // event.preventDefault();
                        // }}
                        onClick={() => props.submitPurchase(props.cart)} 
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
)