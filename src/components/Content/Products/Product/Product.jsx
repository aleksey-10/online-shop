import React from 'react';
import PriceBlock from './PriceBlock/PriceBlock';
import ItemDescribe from './ItemDescribe/ItemDescribe';

export default function Product({ item }) {
    return (
        <div className="product-item container">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4 card-div-img">
                        <img src={item.src} className="card-img mt-auto" alt={item.title} />
                        <PriceBlock price={item.price} /> 
                    </div>
                    <ItemDescribe title={item.title} description={item.description} />                    
                </div>
            </div>
        </div>
    )
}