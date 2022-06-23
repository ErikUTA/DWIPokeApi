import './App.css';
import React from "react";
import Pokedex from './Pokedex';
import { getPokemones, getPokemonesData } from './Api';
import { useEffect, useState } from "react";

// const [useEffect, useState] = React;

const App = () => {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchPokemones = async () => {
    try {
      const data = await getPokemones(10, 10 * page);
      // setPokemons(data.results);
      const promises = data.results.map( async (pokemon) => {
        return await getPokemonesData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setTotal(Math.ceil(data.count/10))
    } catch (err){

    }
  }

  useEffect(() => {
    fetchPokemones();
  }, [page]);

  return (

    <div className='App'> 

      <Pokedex pokemons={pokemons} page={page} setPage={setPage} total={total}/>
    </div>
  )
}

export default App;