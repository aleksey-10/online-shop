import React from 'react';
import Summary from './Summary/Summary';
import ItemsInCart from './ItemsInCart/ItemsInCart';

export default function Cart(props) {
    return (<div className="container align-center">
        <header className="content-title" >Cart </header>
        {
            !props.cart.totalQty ?
                <div className="alert alert-info" role="alert">Your cart is empty</div> :
                (<>
                    <ItemsInCart cart={props.cart} />
                    <Summary cart={props.cart} clearCartTC={props.clearCartTC} setLs={props.setLs}  />
                </>)
        } </div>)
}