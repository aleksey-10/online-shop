import React from 'react';
import Card from './Card/Card';

export default function Cards({catalog}) {
    return (
        <div className="products-cards">
            {
                catalog.map( item => <Card key={item.id} item={item}/>)
            }                   
        </div>
    )
}