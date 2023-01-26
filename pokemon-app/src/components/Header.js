/* This modulo supports the header component.
Variables:
- url: the title Pokeapi. Directs to the image of the Api. */
import React from "react";
import '../styles/Header.scss';

const Header = () => {
  let url = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <nav className="header">
      <div className="poke-image">
        <img src={url} alt="Pokeapi-logo" />
      </div>
    </nav>
  );
}

export default Header;
