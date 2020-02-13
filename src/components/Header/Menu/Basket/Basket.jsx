import React from 'react';

export default function Basket({ basket }) {

    return (
        <div className="basket">
            <i className="fas fa-shopping-basket basket__icon nav-link"></i>
            <span className="basket__qty">{basket.qty}</span>
        </div>
    )
}