import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Profile.css';


const Profile = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setPlayers(data))
    }, []);

    const handleAddToCart = (player) =>{
        console.log(player);
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className='profile-container'>
            <div className="players-container">
                {
                    players.map(player=><Player 
                        key={player.id}
                        player={player}
                        handleAddToCart={handleAddToCart}
                        ></Player>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Profile;