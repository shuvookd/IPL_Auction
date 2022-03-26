import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Selected Player</h4>
            
            <p>{cart.length}</p>
        </div>
    );
};

export default Cart;