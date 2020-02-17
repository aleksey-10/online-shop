import React from 'react';
import Summary from './Summary/Summary';

export default function Cart(props) {
    return (<div className="container align-center">
        <header className="content-title" >Cart</header>
        {
            !props.cart.totalQty ?
                <div className="alert alert-info" role="alert">The cart is empty</div> :
                (
                    <Summary cart={props.cart} clearCart={props.clearCart} />
                )
        } </div>)
}