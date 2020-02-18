import React from 'react';

export default function AddToCart(props) {    
    return <button 
            onClick={() => props.addToCart(props.item, props.item.qty)} 
            className="btn btn-primary price-block__el">Add to cart</button>
}