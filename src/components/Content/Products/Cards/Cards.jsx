import React from 'react';
import Card from './Card/Card';



export default function Cards({products}) {
    return (
        <div className="products-cards">
            {
                products.map((item, index) => <Card key={index} item={item} />)
            }
        </div>
    )
}