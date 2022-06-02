import React, { useState } from 'react';
import axios from 'axios';

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([]);

    const handleOnClick = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
            console.log(response.data.results);
            setPokemonList(() => response.data.results);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    return (
        <div>
            <button onClick={handleOnClick}>Fetch Pokemon</button>
            <ul>
                {
                    pokemonList ? pokemonList.map((item, index) => {
                        return (
                            <li key={index}>{item.name}</li>
                        );
                    })
                        : ''
                }
            </ul>
        </div>
    )

}
export default PokemonList;