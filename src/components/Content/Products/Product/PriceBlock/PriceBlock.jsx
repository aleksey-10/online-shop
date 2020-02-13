import React from 'react';

export default function PriceBlock({ price }) {
    return (
        <div className="price-block">
            <span className="price-block__el price-block__price">
                {price.toFixed(2)} $
        </span>
            <a href="#" className="btn btn-primary price-block__el">Add to cart</a>
        </div>
    )
}