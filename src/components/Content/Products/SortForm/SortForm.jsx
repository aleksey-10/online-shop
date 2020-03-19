import React from 'react'
import { Field, reduxForm } from 'redux-form';

const SortForm = props => {
    const onChangeSelect = () => setTimeout( props.submit, 0)

    return <form onSubmit={props.handleSubmit}>
        <Field
            name="sort"
            component={"select"}
            className="custom-select"
            onChange={onChangeSelect}
        >
            <option value="" disabled={true}>Sort by...</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="stock">Quantity</option>
        </Field>

    </form>
}

export default reduxForm({ form: "sortForm" })(SortForm)