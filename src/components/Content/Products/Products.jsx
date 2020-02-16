import React from 'react';
import { Route } from 'react-router-dom';
import './Products.css';
import Cards from './Cards/Cards';
import Product from './Product/Product';
import * as axios from 'axios';

export default function Products(props) {
    if (props.catalog.length === 0) {
        axios.get("https://my-json-server.typicode.com/aleksey-10/online-store/db")
            .then(response => props.setCatalog(response.data.catalog));

            return <div className="loader"><div className="lds-ripple"><div></div><div></div></div></div>
        }
        
    return (
        <div className="products">
            <header className="content-title" >Products</header>
            <Route exact path='/online-store/products'
                render={() => <Cards catalog={props.catalog} />} />
            {
                props.catalog.map((item, index) =>
                    <Route render={() =>
                        <Product item={item} />}
                        exact path={'/online-store/products/' + item.id} key={index} />
                )
            }
        </div>
    )
}