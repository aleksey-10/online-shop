import React from 'react';
import Card from './Card/Card';



export default function Cards(props) {
    return (
        <div className="products-cards">
            {
                props.products.map((item, index) => <Card key={index} item={item} countItems={props.countItems} />)
            }
        </div>
    )
}