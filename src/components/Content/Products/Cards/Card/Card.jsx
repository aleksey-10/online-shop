import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Card({item, countItems} ) {
    return (
        <div className="card bg-light" >
            <img src={item.src} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                  <NavLink className='navLink' to={'/online-store/products/' + item.id} >{item.title} </NavLink>   
                </h5>
                <p className="card-text"> {item.price.toFixed(2)} $ </p>
                <button onClick={countItems} className="btn btn-primary w-100">Add to cart</button>
            </div>
        </div >)
}