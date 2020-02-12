import React from 'react';
import Link from './Link/Link';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand mr-auto" href="">Company name</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <Link title='Home' path='/home' />
                    <Link title='About us' path='/about' />
                    <Link title='Products' path='/products' />
                    <Link title='Manufacturing' path='/manufacturing' />
                    <Link title='Contact us' path='/contact' />                    
                </ul>
            </div>
        </nav>
    )
}