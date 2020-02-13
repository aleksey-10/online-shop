import React from 'react';
import { Route } from 'react-router-dom';
import Product from './Product/Product';
import Cards from './Cards/Cards';
import './Products.css';

export default function Products(props) {
    return (
        <div className="products">
            <header className="content-title" >Products</header>
            <Route exact path='/online-store/products' render={() => <Cards products={props.products} />} />
            {
                props.products.map((item, index) =>
                    <Route render={() => <Product item={item} countItems={props.countItems} />}
                        exact path={'/online-store/products/' + item.id} key={index} />
                )
            }
        </div>
    )
}