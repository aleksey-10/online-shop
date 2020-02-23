import React from 'react';

export default props => (
    <>
        <div className="form-group">
            <label htmlFor="cartName">Name</label>
            <input type="text" className="form-control" id="cartName" placeholder="Name" required />
        </div>
        <div className="form-group">
            <label htmlFor="cartPhone">Phone number</label>
            <input type="number" className="form-control" id="cartPhone" placeholder="055-555-55-55" required />
        </div>
        <div className="form-group">
            <label htmlFor="cartEmail">Email address</label>
            <input type="email" className="form-control" id="cartEmail" placeholder="name@example.com" />
        </div>

        <div className="form-group">
            <label htmlFor="cartComments">Comments</label>
            <textarea className="form-control" id="cartComments" rows="3"></textarea>
        </div>
    </>
)