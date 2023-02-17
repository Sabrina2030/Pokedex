import './App.css';
import MediaCard from './Components/CustomCard';
import useCard from './Hooks/custom-hook';

function App() {

  const [pokemon, weaknesses, currentId, getPokemon, moves, stats, types] = useCard();

  return (
    <div className="App">
      <header className="App-header">
        <MediaCard 
          image={pokemon.sprites?.front_default}
          name={pokemon.name}
          logo={pokemon.sprites?.other?.dream_world?.front_default}
          pokemon={pokemon}
          weaknesses={weaknesses}
          stats={stats}
        />
        <div>
          <button onClick={() => getPokemon(currentId - 1)}>Previous</button>
          <button onClick={() => getPokemon(currentId + 1)}>Next</button>
        </div>
      </header>
    </div>
  );
}

export default App;
