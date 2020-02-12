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
            <Route exact path={'/' } component={Home} />
            <Route path='/about' component={About} />
            <Route path='/products' component={Products} />
            <Route path='/manufacturing' component={Manufacturing} />
            <Route path='/contact' component={Contact} />
        </main>
    )
}