import React from 'react';
import Card from './Card/Card';

export default function Cards({catalog}) {
    return (
        <div className="products-cards">
            {
                catalog.map((item, index) => <Card key={index} item={item}/>)
            }
        </div>
    )
}