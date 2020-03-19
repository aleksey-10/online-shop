import React from 'react'
import { Field, reduxForm } from 'redux-form';

const SortForm = props => <form className="row justify-content-center" onSubmit={props.handleSubmit}>
    <Field
        name="sort"
        component={"select"}
        className="custom-select" style={{ maxWidth: 250 }}
        onChange={props.submit}
    >
        <option value="">Sort by...</option>
        <option value="title">title</option>
        <option value="price">price</option>
        <option value="stock">quantity</option>
    </Field>

</form>

export default reduxForm({form: "sortForm"})(SortForm)