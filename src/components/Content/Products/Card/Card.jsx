import React from 'react';
import { NavLink } from 'react-router-dom';
import PriceBlockContainer from '../PriceBlock/PriceBlockContainer';

export default function Card(props) {
  return (
    <div className="card bg-light" >
      <NavLink className='navLink' to={'/products/' + props.item.id}>
        <img src={props.item.src} className="card-img-top" alt={props.item.title} />
        <h5 className="card-title">{props.item.title} </h5>
      </NavLink>
      <div className="card-body">
        <PriceBlockContainer item={props.item} />
      </div>
    </div >)
}