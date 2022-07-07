import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
// import Pokemones from "./Pokemones";
import { FiltroData } from "../context/global/global.context";

const Pokedex = (props) => {
    const filterData = FiltroData();
    const {pokemons, page, setPage, total} = props;
    const [array, setArray] = useState([]);
    // console.log(pokemons);

    useEffect(() => {
        setArray(pokemons);
    }, [pokemons]);

    useEffect(() => {
        setArray([]);
        if(array.length > 0) {
            pokemons.filter((data) => {
                if(data.name.toString().toLowerCase().includes(filterData.datosBusqueda)){
                    setArray((current) => [...current, data]);  
                }
            });
        }else{
            setArray(pokemons);
        }
        console.log(array);
    }, [filterData]);

    const anteriorPagina = () => {
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
                <h3>Talamantes Castañeda Ángela María ~191243.</h3>
            </div>
            <div><Pagination page={page + 1} totalPages={total} onAnteriorClick={anteriorPagina} onSiguienteClick={siguientePagina}/></div>
            
            <div className="pokedex-grid">
                {array.slice(0, 10).map((pokemon, idx) => {
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