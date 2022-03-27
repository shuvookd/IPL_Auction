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

            <h2>Question:How Re-act Works?
                <br/>React is maintained by Facebook.
                It is used for declarative paradigm 
                that makes easier to reason of application 
                and aims to be both efficient and flexible.
                It is simple view of each state and it it
                will efficiently update and render the right
                component when data changes.<br/>Question:Difference
                between Props VS State.<br/>
                The man difference between props and state is
                the state is internal and controlled by its component itself
                and here props is external and controlled
                by whatever renders the component.Another difference is
                props is immutable and state is mutable.<br/>
                Question:How use State works?<br/>
                Use state is a function that allow state variable in
                functional component.When we pass the initial state
                to this function and it returns a variable with the
                current state value it is not necessarily the initial state
                and another function to update this value.</h2>
            
        </div>
    );
};

export default Profile;