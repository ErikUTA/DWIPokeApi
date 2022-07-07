import './App.css';
import React from "react";
import Pokedex from './components/Pokedex';
import { getPokemones, getPokemonesData, searchPokemon } from './Api';
import Search from './components/Search';
import { FiltroConsumer, FiltroData, FiltroProvider } from './context/global/global.context';

// GlobalContext:
import { useEffect, useState } from "react";
//import { GlobalContext } from './context/global/global.context';

export default () => <FiltroProvider>
  <FiltroConsumer />
  <App />
</FiltroProvider>

const App = () => {
  const filter = FiltroData();
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemones = async () => {
    try {
      const data = await getPokemones(10, 10 * page);
      // setPokemons(data.results);
      const promises = data.results.map( async (pokemon) => {
        return await getPokemonesData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setTotal(Math.ceil(data.count/ 10))
    } catch (err) {}
  }

  useEffect(() => {
    console.log(filter.datosBusqueda);
  }, [filter]);

  useEffect(() => {
    if (!searching) {
      fetchPokemones();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemones();
    }
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setSearching(false);
  };


  return (

    <div className='App'> 
      <Search onSearch={onSearch}/> {notFound ? (<div className="not-found-text"> No se encontró el Pokemon. </div>) : 
      <Pokedex pokemons={pokemons} page={page} setPage={setPage} total={total}/> }
    </div>
  )
}