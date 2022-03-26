import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name,price,id,image} = props.player;
    return (
        <div>
            <div>
                <p>{image}</p>
            </div>
            <h2>Name :{name}</h2>
            <p>Price :{price}</p>
            <p>ID :{id}</p>
            
        </div>
    );
};

export default Player;