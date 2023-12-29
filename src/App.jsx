import { useState } from "react";
import { useGetPokemonByIdQuery } from "./store/api/pokeapi"

export const App = () => {

  const [pokemonId, setPokemonId] = useState(1);
  const { data: pokemon, isLoading } = useGetPokemonByIdQuery(pokemonId)

  const previousId = () => {
    setPokemonId(pokemonId - 1);
  }
  const nextId = () => {
    setPokemonId(pokemonId + 1);
  }

  return (
    <>
      <div>
        <h1>Listado de Pokémon</h1>

        <h2>Estado: {isLoading ? 'Cargando...' : '¡Mostrando Pokémon!'}</h2>

        {pokemon && (
          <>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`${pokemon.name} image`} />
          </>

        )}

        
        <button onClick={previousId} disabled={pokemonId <= 1}>
          Previous
        </button>
        <button onClick={nextId}>
          Next
        </button>

      </div>
    </>
  )
}