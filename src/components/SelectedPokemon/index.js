// SelectedPokemon.js
import React from "react";
import styles from "./Battlefield.module.css";
import pokeball1 from "./pokeball_1.png";
import pokeball2 from "./pokeball_2.png";
import pokeball3 from "./pokeball_3.png";

function SelectedPokemon({ selectedPokemon, onAttack }) {
  return (
    <div className={styles.player_pokemon}>
      <span className={styles.pokemon_name}>{selectedPokemon.name}</span>
      <img
        className={styles.pokemon_img}
        src={selectedPokemon.sprites.other.showdown.front_default}
        alt={selectedPokemon.name}
      />
      <div className={styles.pokemon_stats}>
        <div className={styles.button_wrapper}>
          <div className={styles.atck_button}>
            <img
              onClick={onAttack}
              className={styles.atck_img}
              src={pokeball1}
              alt="Ataque 1"
            />
          </div>
          <span>Height: {selectedPokemon.heightInMeters}</span>
        </div>

        <div className={styles.button_wrapper}>
          <div className={styles.atck_button}>
            <img
              onClick={onAttack}
              className={styles.atck_img}
              src={pokeball2}
              alt="Ataque 2"
            />
          </div>
          <span>Weight: {selectedPokemon.weightInKilograms}</span>
        </div>

        <div className={styles.button_wrapper}>
          <div className={styles.atck_button}>
            <img
              onClick={onAttack}
              className={styles.atck_img}
              src={pokeball3}
              alt="Ataque 3"
            />
          </div>
          <span>Type: {selectedPokemon.types[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default SelectedPokemon;
