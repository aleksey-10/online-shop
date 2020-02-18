import React from 'react';
import './Products.css';
import Card from './Card/Card';

export default function Products(props) {
    return (<div className="products container-fluid">
        <header className="content-title" >Products</header>
        <div className="products-cards ">
            {
                props.catalog.map(item => <Card key={item.id} item={item} />)
            }
        </div>
    </div>)
}