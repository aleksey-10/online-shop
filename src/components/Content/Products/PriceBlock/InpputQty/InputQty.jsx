import React from 'react';

export default function InputQty(props) {
    return <input type="number" className="form-control col" min='1'
        value={+props.item.qty}
        onChange={ event => props.onChangeToBuy(props.item.id, event.target.value) }
        onKeyDown= {
            event => {
            if (event.key === 'Enter') props.addToCartTC(props.item, props.item.qty);
        }}
    />
}