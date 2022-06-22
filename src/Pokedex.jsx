import React from "react";
import Pokemon from "./Pokemon";
// import Pokemones from "./Pokemones";

const Pokedex = (props) => {

    const {pokemons} = props;
    console.log(pokemons);

    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return (
                        // <div key={pokemon.name}>#{idx+1}: {pokemon.name}</div>
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokedex;