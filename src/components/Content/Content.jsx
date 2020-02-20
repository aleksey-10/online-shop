import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import ProductsContainer from './Products/ProductsContainer';
import Manufacturing from './Manufacturing/Manufacturing';
import Contact from './Contact/Contact';
import CartContainer from './Cart/CartContainer';

export default function Content(props) {
    return (
        <main className='content container-fluid'>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/about'} component={About} />
                <Route path={'/products/:productId?'} component={ProductsContainer} />
                <Route path={'/manufacturing'} component={Manufacturing} />
                <Route path={'/contact'} component={Contact} />
                <Route path={'/cart'} component={CartContainer} />
            </Switch>
        </main>
    )
}