/* --------------------------------------------
This module supports the card with the Pokemon information.
This component use conditionals to know if there is information in the Pokemon variable.
If true, it shows it, if false use the word "Pokemon" insted the Pokemon name.
Variables:
- Pokemon: are the props and are received from the Search component.
Is the Pokemon information according to the search and in json.
- Url: is the link with the Pokemon image.
-------------------------------------------- */

import React from "react";
import '../styles/PokeInfo.scss';

const PokeInfo = (props) => {
  const { pokemon } = props;
  let url = "";
  if (!pokemon || pokemon.sprites.front_default === null) {
    url = "https://cdn-icons-png.flaticon.com/512/287/287221.png?w=740&t=st=1674681001~exp=1674681601~hmac=d14a14302e51e951cccdc1994b5ee2cf1a1637440752dc4dab5d877f5c0393bd"
  } else {
    url = pokemon.sprites.front_default;
  }
  
  return (
    <div className="card-container">
      <div className="pokemon-img">
        <img src={url}
        alt="pokebola"/>
      </div>
      <div className="pokemon-name">
        {!pokemon ?
        <h3>Pokemón</h3>
        : <h3>{pokemon.name}</h3>
        }
      </div>
      <div className="pokemon-card">
        {!pokemon ?
        <ul>
          <li><strong>Habilidades --</strong></li>
          <li><strong>Experiencia base ---</strong></li>
          <li><strong>Altura ---</strong></li>
          <li><strong>Peso ---</strong></li>
          <li><strong>tipo --</strong></li>
        </ul> : 
        <ul>
          <li><strong>Habilidades ---</strong>{pokemon.abilities.map((ability, idx) => {
            return <span className="mapName" key={idx}>{ability.ability.name} | </span>
          })}</li>
          <li><strong>Experiencia base ---</strong> {pokemon.base_experience}</li>
          <li><strong>Altura ---</strong> {pokemon.height}</li>
          <li><strong>Peso ---</strong> {pokemon.weight}</li>
          <li><strong>tipo ---</strong>{pokemon.types.map((type, idx) => {
            return <span className="mapName" key={idx}>{type.type.name} | </span>
          })}</li>
        </ul>
        }
      </div>
    </div>
  );
}

export default PokeInfo;
