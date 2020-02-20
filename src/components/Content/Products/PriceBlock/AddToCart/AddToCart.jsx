import React from 'react';

export default function AddToCart(props) {    
    return <button 
            onClick={() => props.addToCartTC(props.item, props.item.qty) } 
            className="btn btn-primary price-block__el">Add to cart</button>
}