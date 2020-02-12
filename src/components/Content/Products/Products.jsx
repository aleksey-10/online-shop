import React from 'react';
import Card from './Card/Card';
import products from './products';
import { Route } from 'react-router-dom';
import Product from './Product/Product';

let Cards = () => {
    return (
        <div className="products-cards">
            {
                products.map((item, index) => <Card key={index} item={item} />)
            }
        </div>
    )
}


export default function Products() {

    return (
        <div className="products">
            <header className="content-title" >Products</header>
            <Route exact path='/online-shop/products' component={Cards} />
            {
                products.map((item, index) =>
                    <Route
                        render={() => <Product item={item} />}
                        exact path={'/online-shop/products/' + item.id} key={index} />
                )
            }
        </div>
    )
}