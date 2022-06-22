import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
// import Pokemones from "./Pokemones";

const Pokedex = (props) => {

    const {pokemons, page, setPage, total} = props;
    // console.log(pokemons);

    const ultimaPagina = () => {
        const siguientePagina = Math.max(page - 1, 0);
        setPage(siguientePagina);
      };
    
      const siguientePagina = () => {
        const siguientePagina = Math.min(page + 1, total - 1);
        setPage(siguientePagina);
      };

    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div><Pagination page={1} totalPages={total} onSiguienteClick ={siguientePagina} onAnteriorClick={ultimaPagina}/></div>
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