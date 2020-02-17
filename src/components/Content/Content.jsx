import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import ProductsContainer from './Products/ProductsContainer';
import Manufacturing from './Manufacturing/Manufacturing';
import Contact from './Contact/Contact';
import CartContainer from './Cart/CartContainer';

export default function Content (props) {
    return (
        <main className='content container-fluid'>
            <Route exact path={'/online-store/' } component={Home} />
            <Route path='/online-store/about' component={About} />
            <Route path='/online-store/products' component = {ProductsContainer} />
            <Route path='/online-store/manufacturing' component={Manufacturing} />
            <Route path='/online-store/contact' component={Contact} />
            <Route path='/online-store/cart' component ={ CartContainer } />
        </main>
    )
}