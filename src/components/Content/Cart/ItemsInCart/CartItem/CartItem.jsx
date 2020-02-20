import React from 'react';
import styles from '../../Cart.module.scss';

export default function CartItem(props) {
    return (
        <li className="list-group-item bg-light d-flex justify-content-center align-items-center row">
            <img src={props.item.src} alt={props.item.title} className="col-12 col-md-2" />
            <span className="col-12 col-md-5">{props.item.title}</span>
            <span className="col-5 col-md-2" style={{ textAlign: 'right' }}>{props.item.sum.toFixed(2)} $</span>
            <input type="number" className="form-control col-5 col-md-2"
                value={+props.item.qty}
                onChange={event => props.setCartItemTC(props.item.id, event.target.value)} />
            <span className={styles.times}
                onClick={() => props.removeCartItemTC(props.item.id)}>&times;</span>
        </li>
    )
}