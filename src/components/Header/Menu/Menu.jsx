import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIconContainer from './CartIcon/CartIconContainer';

let Li = props => {
    return (
        <li className="nav-item">
            <NavLink className='nav-link' to={props.path}>{props.title}</NavLink>
        </li>
    )
}

export default function Menu( ) {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto w-100 justify-content-center">
                <Li title='Home' path='/online-store/' />
                <Li title='About us' path='/online-store/about' />
                <Li title='Products' path='/online-store/products' />
                <Li title='Manufacturing' path='/online-store/manufacturing' />
                <Li title='Contact us' path='/online-store/contact' />
            </ul>
            <CartIconContainer />
        </div>
    )
}
