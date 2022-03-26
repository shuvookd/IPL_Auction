import React from 'react';
import './Player.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Player = ({player, handleAddToCart}) => {
const { name, image, price } = player;
   
return (
    <div className='player'>
        <img src={image} alt=""></img>
        <div className='player-info'>
            <p>{name}</p>
            <p>Price: {price}</p>
        </div>
        <button onClick={() => handleAddToCart(player)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
        </button>
    </div>
);
};
export default Player;