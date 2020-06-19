import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIconContainer from './CartIcon/CartIconContainer';

let Li = props => (
  <li className="nav-item">
    <NavLink className='nav-link' to={props.to}>{props.title}</NavLink>
  </li>
);

export default function Menu() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto w-100 justify-content-center">
        <Li title='Products' to='/products' />
        <Li title='About us' to='/about' />
        <Li title='Contact us' to='/contact' />
      </ul>
      <CartIconContainer />
    </div>
  )
}
