import React from 'react';
import './Cart.css'

const Cart = ({name}) => {
    return (
        <div className='cart'>
            <h4>Selected Players</h4>
            
            <p>Name:{name}</p>
            
            
            <button >Your Lucky Player</button>
            <button>Choose Again</button>
        </div>
    );
};

export default Cart;