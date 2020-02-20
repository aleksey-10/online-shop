import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Jumbotron() {
    return (
        <div className="jumbotron bg-light container">
            <h1 className="display-4">Welcome!</h1>
            <p className="lead"></p>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis debitis, ducimus corporis cum corrupti ab beatae voluptatem ut soluta laborum, voluptas blanditiis laboriosam, ratione magnam et esse ipsa cupiditate veniam suscipit sint eligendi dolore! </p>
            <hr className="my-4" />
            <p>Quis ut corrupti incidunt nisi tempora necessitatibus itaque? Quisquam, excepturi doloremque iste possimus expedita autem inventore sint animi!  </p>
            <p className="lead">
                <NavLink className="btn btn-primary btn-lg" to="/products" role="button">Go to products</NavLink>
            </p>
        </div>
    )
}