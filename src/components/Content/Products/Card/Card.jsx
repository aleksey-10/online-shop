import React from 'react';
import { NavLink } from 'react-router-dom';
import PriceBlockContainer from '../PriceBlock/PriceBlockContainer';

export default function Card(props) {
  return (
    <div className="card bg-light" >
      <NavLink className='navLink' to={'/products/' + props.item.id}>
        <img src={props.item.src} className="card-img-top" alt={props.item.title} />
      </NavLink>
      <div className="card-body">
        <h5 className="card-title">
          <NavLink className='navLink' to={'/products/' + props.item.id} >{props.item.title} </NavLink>
        </h5>
        <PriceBlockContainer item={props.item} />
      </div>
    </div >)
}