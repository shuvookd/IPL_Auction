import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';



const Player = ({player, handleAddToCart}) => {
const { name, image, price } = player;
   
return (
    <div className='player'>
        <img src={image} alt=""></img>
        <div className='player-info'>
            <p>{name}</p>
            <p>Price: {price}</p>
        </div>
        <button  className='btn-cart' onClick={() => handleAddToCart(name)}>
              Buy Player 
            <FontAwesomeIcon icon={ faPerson}></FontAwesomeIcon>
        </button>
    </div>
);
};
export default Player;