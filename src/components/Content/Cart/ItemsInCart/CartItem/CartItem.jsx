import React from 'react';
import styles from '../../Cart.module.scss';
import { NavLink } from 'react-router-dom';

export default function CartItem(props) {
    return (
        <li className="list-group-item bg-light d-flex justify-content-center align-items-center row">
            <NavLink className='navLink col-12 col-md row justify-content-center align-items-center '
                to={'/products/' + props.item.id}>
                <img src={props.item.src} alt={props.item.title} className="col-12 col-md-4 col-lg-3" />
                <span className="col-12 col-md">{props.item.title}</span>
            </NavLink>
            <span className="col-5 col-md-2" style={{ textAlign: 'right' }}>{props.item.sum.toFixed(2)} $</span>
            <input type="number" className="form-control col-5 col-md-2"
                value={+props.item.qty}
                onChange={event => props.setCartItemTC(props.item.id, event.target.value)} />
            <span className={styles.times}
                onClick={() => props.removeCartItemTC(props.item.id)}>&times;</span>
        </li>
    )
}