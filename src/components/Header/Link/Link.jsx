import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Link(props) {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={props.path}>{props.title}</NavLink>
        </li>
    )
}