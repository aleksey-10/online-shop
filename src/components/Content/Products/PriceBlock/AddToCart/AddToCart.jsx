import React from 'react';

export default function AddToCart(props) {    
    return <button 
            onClick={props.addToCart} 
            onKeyDown= {
                event => {
                if (event.keyCode === 'Enter') props.addToCart();
            }}
            className="btn btn-primary price-block__el">Add to cart</button>
}