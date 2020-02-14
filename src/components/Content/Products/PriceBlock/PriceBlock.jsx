import React from 'react';
import { countItemsActionCreator, addToCartActionCreator } from '../../../../redux/state';

export default function PriceBlock(props) {
    return (
        <div className="price-block">
            <span className="price-block__el price-block__price">
                {props.item.price.toFixed(2)} $
        </span>
            <button onClick={() => props.dispatch(addToCartActionCreator( props.item, 1 ))} className="btn btn-primary price-block__el">Add to cart</button>
        </div>
    )
}