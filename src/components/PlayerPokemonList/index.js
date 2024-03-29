import React from "react";
import styles from "./Battlefield.module.css";

function PlayerPokemonList({ playerPkmns, onSelectPokemon }) {
  return (
    <div className={styles.player_pkmns}>
      {playerPkmns.map((pokemon) => (
        <div className={styles.player_pkmn} key={pokemon.id}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <button onClick={() => onSelectPokemon(pokemon.id)}>
            {pokemon.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlayerPokemonList;
