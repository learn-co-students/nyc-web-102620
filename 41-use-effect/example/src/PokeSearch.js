import React, { useEffect, useState } from "react";

function Pokemon({ pokemon }) {
  if (!pokemon) return <h3>Loading...</h3>;
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name + " front sprite"}
      />
    </div>
  );
}

function PokemonForm({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

function PokeSearch() {
  const [pokemon, setPokemon] = useState(null);
  const [query, setQuery] = useState("charmander");

  // TODO: fetch pokemon when the component loads
  // TODO: fetch pokemon when the query changes

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then((r) => r.json())
      .then((pokemon) => setPokemon(pokemon));
  }, [query]);

  console.log({ query });

  return (
    <div>
      <PokemonForm onSearch={setQuery} />
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default PokeSearch;
