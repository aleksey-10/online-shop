import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About/About';
import ProductsContainer from './Products/ProductsContainer';
import Contact from './Contact/Contact';
import CartContainer from './Cart/CartContainer';
import NotFound from '../common/NotFound';

export default function Content(props) {
    return (
        <main className='content container-fluid'>
            <Switch>
                <Route path={'/about'} component={About} />
                <Route path={'/products/:productId?'} component={ProductsContainer} />
                <Route path={'/contact'} component={Contact} />
                <Route path={'/cart'} component={CartContainer} />

                <Route exact path="/">
                    <Redirect to="/products" />
                </Route>

                <Route path={'/'} component={NotFound} />
            </Switch>
        </main>
    )
}
