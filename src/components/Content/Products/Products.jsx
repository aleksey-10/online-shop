import React from 'react';
import { Route } from 'react-router-dom';
import Product from './Product/Product';
import Cards from './Cards/Cards';
import './Products.css';

export default function Products({ products }) {
    return (
        <div className="products">
            <header className="content-title" >Products</header>
            <Route exact path='/online-shop/products' render={() => <Cards products={products} />} />
            {
                products.map((item, index) =>
                    <Route render={() => <Product item={item} />}
                        exact path={'/online-shop/products/' + item.id} key={index} />
                )
            }
        </div>
    )
}