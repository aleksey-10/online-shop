import React from 'react';

export default function InputQty(props) {
    return <input type="number" className="form-control col-6" min='1'
        value={props.qty}
        onChange={ props.onChangeQty }
    />
}