import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, minLength, checkMail } from '../../../../../utils/validators';
import Input from './Input';

let minLength4 = minLength(4);

const FormModalBody = props => <form onSubmit={props.handleSubmit}>
    <div className="modal-body">
        <div className="form-group">
            <label htmlFor="cartName">Name</label>
            <Field
                validate={[required, minLength4]}
                component={Input} type="text" placeholder="Name" name="name"
                className="form-control" id="cartName" />
        </div>
        <div className="form-group">
            <label htmlFor="cartPhone">Phone number</label>
            <Field
                validate={[required]}
                component={Input} type="text" placeholder="055-555-55-55" name="phone"
                className="form-control" id="cartPhone" />
        </div>
        <div className="form-group">
            <label htmlFor="cartEmail">Email address</label>
            <Field
                validate={[checkMail]}
                component={Input} type="email" placeholder="email@example.com" name="email"
                className="form-control" id="cartEmail" />
        </div>

        <div className="form-group">
            <label htmlFor="cartComments">Comments</label>
            <Field
                component="textarea" placeholder="Any comments" name="comments"
                className="form-control" id="cartComments" rows="3" />
        </div>
    </div>
    <div className="modal-footer">
        <input
            type="submit" className="btn btn-primary"
            data-dismiss="modal" disabled={!props.valid}
            onClick={props.submit}
            value="Send request"
        />
    </div>
</form>

export default reduxForm({ form: 'purchaseBlank' })(FormModalBody)