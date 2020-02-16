import React from 'react';
import InputQtyContainer from './InpputQty/InputQtyContainer';
import AddToCartContainer from './AddToCart/AddToCartContainer';

export default function PriceBlock(props) {
    return (
        <div className="price-block">
            <div className="price-block__el price-block__price row align-items-center">
                <span className="col-6">{props.item.sum.toFixed(2)} $</span>
                <InputQtyContainer item={props.item} />
            </div>
            <AddToCartContainer item={props.item} />
        </div>
    )
}