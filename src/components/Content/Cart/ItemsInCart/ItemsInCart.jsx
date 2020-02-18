import React from 'react';
import CartItemContainer from './CartItem/CartItemContainer';

export default function ItemsInCart({cart}) {
    return (
        <ul className="list-group">
            {
                cart.items.map( item => <CartItemContainer key={item.id} item={item} /> )
            }
        </ul>
    )
}