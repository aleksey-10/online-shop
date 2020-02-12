import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Products from './Products/Products';
import Manufacturing from './Manufacturing/Manufacturing';
import Contact from './Contact/Contact';

export default function Content () {
    return (
        <main className='content container-fluid'>
            <Route exact path={'/online-shop/' } component={Home} />
            <Route path='/online-shop/about' component={About} />
            <Route path='/online-shop/products' component={Products} />
            <Route path='/online-shop/manufacturing' component={Manufacturing} />
            <Route path='/online-shop/contact' component={Contact} />
        </main>
    )
}