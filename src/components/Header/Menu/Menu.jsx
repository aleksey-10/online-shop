import React from 'react';
import { NavLink } from 'react-router-dom';

let Li = props => {
    return (
        <li className="nav-item">
            <NavLink className='nav-link' to={props.path}>{props.title}</NavLink>
        </li>
    )
}

export default function Menu() {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto w-100 justify-content-center">
                <Li title='Home' path='/online-shop/' />
                <Li title='About us' path='/online-shop/about' />
                <Li title='Products' path='/online-shop/products' />
                <Li title='Manufacturing' path='/online-shop/manufacturing' />
                <Li title='Contact us' path='/online-shop/contact' />
            </ul>
        </div>
    )
}
