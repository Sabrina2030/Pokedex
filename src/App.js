import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const Url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState({});
  const [currentId , setCurrentId] = useState(1);

  const getPokemon = (id) => {
    setCurrentId(id);
  }

  useEffect(() => {
    fetch(Url + currentId)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrentId(data.id);
        setPokemon(data);
      });
  }, [currentId]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>{pokemon.name}</label>
        </div>
        <div>
          <img src={pokemon.sprites?.front_default} alt="pokemon" />
        </div>
        <div>
            <button onClick={() => getPokemon(currentId - 1)}>Previous</button>
            <button onClick={() => getPokemon(currentId + 1)}>Next</button>
        </div>
        <div>
          <label> 
            Weight: {pokemon.weight}
          </label>
        </div>
        <div>
          Abilities: 
          {pokemon.abilities.map( item => {
            return <div>{item.ability.name}</div>
          })}
        </div>
        <div>
          Weaknesses:
          {pokemon.types.map( item => {
            return <div>{item.type.name}</div>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
