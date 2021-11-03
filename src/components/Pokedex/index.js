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
      typePokemons: 'Fire',
    };
    this.handleNextPokemon = this.handleNextPokemon.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
  }

  getPokemon() {
    return pokemons.filter((pokemon) => pokemon);
  }

  handleNextPokemon(pokemonLength) {
    if (this.state.pokemonIndex === pokemonLength - 1) {
      this.setState({ pokemonIndex: 0 });
    }
    this.setState((prevState) => ({
      pokemonIndex: prevState.pokemonIndex + 1,
    }));
  }

  render() {
    const allPokemon = this.getPokemon();
    const pokemon = allPokemon[this.state.pokemonIndex];
    return (
      <>
        <Header />
        <main className="container">
          <Pokemon pokemons={pokemon} key={pokemons.id} />
          <Button onClick={() => this.handleNextPokemon(allPokemon.length)}>
            Próximo
          </Button>
        </main>
      </>
    );
  }
}

export default Pokedex;
