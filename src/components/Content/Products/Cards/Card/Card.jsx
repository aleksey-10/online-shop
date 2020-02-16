import React from 'react';
import { NavLink } from 'react-router-dom';
import PriceBlock from './../../PriceBlock/PriceBlock';

export default function Card(props) {
  return (
    <div className="card bg-light" >
      <img src={props.item.src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <NavLink className='navLink' to={'/online-store/products/' + props.item.id} >{props.item.title} </NavLink>
        </h5>
        <PriceBlock item={props.item}  />
      </div>
    </div >)
}