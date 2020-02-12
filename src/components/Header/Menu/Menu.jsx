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
                <Li title='Home' path='/' />
                <Li title='About us' path='/about' />
                <Li title='Products' path='/products' />
                <Li title='Manufacturing' path='/manufacturing' />
                <Li title='Contact us' path='/contact' />
            </ul>
        </div>
    )
}
