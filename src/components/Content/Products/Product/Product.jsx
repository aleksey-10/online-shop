import React from 'react';

export default function Product({ item }) {
    return (
        <div className="product-item container">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={item.src} className="card-img" alt={item.title} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        {item.price} $
                    </div>
                </div>
            </div>
        </div>
    )
}