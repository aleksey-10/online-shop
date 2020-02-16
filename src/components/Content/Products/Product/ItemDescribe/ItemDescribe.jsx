import React from 'react';

export default function ItemDescribe(props) {
    return (
        <div className="col-md-8">
            <div className="card-body product-item-description">
                <div className='product-item-description__header'>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <p className="product-item-description__footer card-text"><small className="text-muted">Last updated 43 mins ago</small></p>
            </div>
        </div>
    )
}