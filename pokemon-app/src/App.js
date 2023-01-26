/* --------------------------------------------
This module is the core component.
This application try to be similar to a Pokedex, using the PokeApi like source of information.
To use it, introduce an ID or a Pokemon's name into the input and click the "Consultar" button.
The card will change if the ID or name exists in the Api.
Pokemon information:
- Image
- Name
- Abilities
- Base Experience
- Height
- Weight
- Type
Beside the Api information, the application is in Spanish language.
The desing is made with sass and has two sizes:
- width 360 to 414 pixels.
- width 415 pixels and up.
-------------------------------------------- */

import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
