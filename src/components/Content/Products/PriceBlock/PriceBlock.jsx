import React from 'react';
import InputQty from './InpputQty/InputQty';
import AddToCart from './AddToCart/AddToCart';

export default function PriceBlock(props) {
    return (
        <div className="price-block">
            <div className="price-block__el price-block__price row align-items-center">
                <span className="col-6">{props.item.sum.toFixed(2)} $</span>
                <InputQty item={props.item} onChangeToBuy={props.onChangeToBuy} addToCart={props.addToCart} />
            </div>
            <AddToCart item={props.item} addToCart={props.addToCart} />
        </div>
    )
}