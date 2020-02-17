import React from 'react';

export default function Summary(props) {
    return (
        <div>
            <div >Total quantity: {props.cart.totalQty}</div>
            <div >Total sum: {props.cart.totalSum.toFixed(2)} $</div>
            <button className="btn btn-primary ">Submit</button>
            <button className="btn btn-danger "
                onClick={props.clearCart}>Clear cart</button>
        </div>
    )
}