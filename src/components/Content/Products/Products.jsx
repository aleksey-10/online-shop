import React from 'react';
import { Route } from 'react-router-dom';
import './Products.css';
import Cards from './Cards/Cards';
import Product from './Product/Product';


export default function Products({catalog}) {
    return (
        <div className="products">
            <header className="content-title" >Products</header>
            <Route exact path='/online-store/products'
                render={() => <Cards catalog={catalog} />} />
            {
                catalog.map((item, index) =>
                    <Route render={() => 
                        <Product item={item}  />}
                        exact path={'/online-store/products/' + item.id} key={index} />
                )
            }
        </div>
    )
}