import React from 'react';
import styles from '../Cart.module.scss';
import FormModalContainer from '../FormModal/FormModalContainer';

export default function Summary({ props }) {
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
                <>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#modal">Accept</button>
                    <FormModalContainer />
                </>
                <button className="btn btn-danger"
                    onClick={props.clearCartTC}>Clear cart</button>
            </div>
        </div>
    )
}