import React, { useEffect, useState } from 'react';
import './Players.css'
import Player from "../Player/Player";


const Players = () => {
    
        
    const [players, setplayers] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setplayers(data))
    },[])


    return (
        <div className='players-container'>
        <div className="players">
            <h1>This is players section</h1>
            {
                players.map(player => <Player 
                    key={player.id}
                    player ={player}
                    
                    ></Player>)
            }
        </div>
        <div className="display">
            <h1>This is cart</h1>
        </div>
        
        </div>
    );
};

export default Players;