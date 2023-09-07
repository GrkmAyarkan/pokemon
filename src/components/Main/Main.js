import React, { useEffect, useState } from 'react';
import Pokesearch from '../Pokesearch/pokesearch'
import axios from 'axios';

const Main = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50');
                const data = response.data.results;
                setPokemonList(data);
            } catch (error) {
                console.error('Hata:', error);
            }
        };

        fetchPokemonData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredPokemon = pokemonList.filter((pokemon) =>
            pokemon.name.includes(e.target.value.toLowerCase())
        );
        setSearchResults(filteredPokemon);
        console.log(searchResults);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Pokesearch type="text" placeholder="Pokemon ara..." value={searchTerm} onChange={handleSearch} />
            <ul>
                {searchResults.map((pokemon, index,) => (
                    <li key={index}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/').slice(-2, -1)[0]}.svg`}
                            alt={pokemon.name}
                        />
                        <h1>
                            {pokemon.name}
                        </h1>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;
