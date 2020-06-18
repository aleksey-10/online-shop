import React from 'react';
import InputQty from './InpputQty/InputQty';
import AddToCart from './AddToCart/AddToCart';

export default function PriceBlock(props) {
    return (
        <div className="price-block">
            <div className="price-block__el price-block__price row align-items-center">
                <span className="col-5">In stock: </span>
                <span className="col text-right">
                    {props.item.stock
                        ? props.item.stock + 'pcs'
                        : <strong>out of stock</strong>
                    }
                </span>
                <span className="col-7 text-left">Total: {props.item.sum.toFixed(2)} $</span>
                <InputQty
                    item={props.item}
                    onChangeToBuy={props.onChangeToBuy}
                    addToCartTC={props.addToCartTC}
                />
            </div>
            <AddToCart item={props.item} addToCartTC={props.addToCartTC} />

        </div>
    )
}