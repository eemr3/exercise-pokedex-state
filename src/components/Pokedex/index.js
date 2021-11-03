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
      typePokemons: 'All',
    };
    this.handleNextPokemon = this.handleNextPokemon.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
    this.handleFilterPokemon = this.handleFilterPokemon.bind(this);
  }

  getPokemon() {
    if (this.state.typePokemons === 'All') {
      return pokemons;
    }
    return pokemons.filter((pokemon) => pokemon.type === this.state.typePokemons);
  }

  handleNextPokemon(pokemonLength) {
    if (this.state.pokemonIndex === pokemonLength - 1) {
      this.setState({ pokemonIndex: 0 });
    } else {
      this.setState((prevState) => ({
        pokemonIndex: prevState.pokemonIndex + 1,
      }));
    }
  }

  handleFilterPokemon(typePokemon) {
    this.setState({
      typePokemons: typePokemon,
      pokemonIndex: 0,
    });
    console.log(this.state.typePokemons);
  }

  render() {
    const allPokemon = this.getPokemon();
    const pokemon = allPokemon[this.state.pokemonIndex];
    return (
      <>
        <Header />
        <main className="container">
          <Pokemon pokemons={pokemon} key={pokemons.id} />
          <div className="container-button">
            <Button onClick={() => this.handleFilterPokemon('All')}>All</Button>
            <Button onClick={() => this.handleFilterPokemon('Fire')}>Fire</Button>
            <Button onClick={() => this.handleFilterPokemon('Psychic')}>Psychic</Button>
          </div>
          <Button onClick={() => this.handleNextPokemon(allPokemon.length)}>
            Próximo
          </Button>
        </main>
      </>
    );
  }
}

export default Pokedex;
