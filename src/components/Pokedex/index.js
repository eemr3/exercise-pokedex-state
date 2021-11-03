import React, { Component } from 'react';
import pokemons from '../../services/data';
import Button from '../Button';
import Header from '../Header';
import Pokemon from '../Pokemon';

import './pokedex.css';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
    };
    this.handleNextPokemon = this.handleNextPokemon.bind(this);
  }

  handleNextPokemon() {
    if (this.state.pokemonIndex === pokemons.length - 1) {
      this.setState({ pokemonIndex: 0 });
    }
    this.setState((prevState) => ({
      pokemonIndex: prevState.pokemonIndex + 1,
    }));
  }

  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Pokemon pokemons={pokemons[this.state.pokemonIndex]} key={pokemons.id} />
          <Button onClick={this.handleNextPokemon}>Próximo</Button>
        </main>
      </>
    );
  }
}

export default Pokedex;
