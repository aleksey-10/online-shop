import React from 'react';
import styles from '../Cart.module.css';

export default function Summary(props) {
    return (
        <div className={styles.summary}>
            <div className={styles.textSummary}>
                <span>Total quantity:</span>
                <span>{props.cart.totalQty}</span>
            </div>
            <div className={styles.textSummary}>
                <span>Total sum:</span>
                <span>{props.cart.totalSum.toFixed(2)} $</span>
            </div>
            <div className={styles.buttonsSummary}>
                <button className="btn btn-primary ">Submit</button>
                <button className="btn btn-danger "
                    onClick={props.clearCart}>Clear cart</button>
            </div>
        </div>
    )
}