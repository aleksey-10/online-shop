import React from 'react';

export default function PriceBlock(props) {
    return (
        <div className="price-block">
            <span className="price-block__el price-block__price">
                {props.price.toFixed(2)} $
        </span>
            <button onClick={props.countItems} className="btn btn-primary price-block__el">Add to cart</button>
        </div>
    )
}