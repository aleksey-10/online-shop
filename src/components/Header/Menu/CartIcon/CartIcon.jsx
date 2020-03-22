import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CartIcon({ cart }) {

    return (
        <NavLink to='/cart' className="cart btn btn-light">
            <i className="fas fa-shopping-basket cart__icon"></i>
            <span className="cart__qty">{cart.totalQty}</span>
        </NavLink>
    )
}