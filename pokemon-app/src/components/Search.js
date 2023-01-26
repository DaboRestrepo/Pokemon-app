/* --------------------------------------------
This modulo supports the Search component.
inside this component the PokeInfo component is used.
It has two mainly functions:
- onChange: is called to save the search state. This change is giving by the input tag.
- onClick: is called when the button is clicked and save the Pokemon state. This calls the searchPokemon funtion in the Api file.
Variables:
- search: has the word or number the user write into the inputs.
- pokemon: has the Pokemon information according the user's search.
-------------------------------------------- */

import React from "react";
import '../styles/Search.scss';
import { searchPokemon } from "../Api";
import PokeInfo from "./PokeInfo";

const { useState } = React;

const SearchBar = () => {
  const [ search, setSearch ] = useState(0);
  const [ pokemon, setPokemon ] = useState();
  
  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  }
  return (
    <div className="search-container">
      <div className="left">
        {search !== undefined || search !== 0 ?
        <PokeInfo pokemon={pokemon}/>
        : <PokeInfo />
        } 
      </div>
      <div className="right">
        <hr/>
        <h4>¿Quieres conocer otro Pokemón?</h4>
        <p>Introduce el ID o el nombre del Pokemón</p>
        <div className="searchBar">
          <input 
            placeholder="ID del Pokemón..."
            onChange={onChange}/>
        </div>
        <div className="searchBar">
          <input 
            placeholder="Nombre del Pokemón..."
            onChange={onChange} />
        </div>
        <div className="search-btn">
          <button onClick={onClick}>🔎 Consultar</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
