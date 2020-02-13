import React from 'react';
import PriceBlock from './PriceBlock/PriceBlock';
import ItemDescribe from './ItemDescribe/ItemDescribe';

export default function Product(props) {
    return (
        <div className="product-item container">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4 card-div-img">
                        <img src={props.item.src} className="card-img mt-auto" alt={props.item.title} />
                        <PriceBlock price={props.item.price} countItems={props.countItems} /> 
                    </div>
                    <ItemDescribe title={props.item.title} description={props.item.description} />                    
                </div>
            </div>
        </div>
    )
}