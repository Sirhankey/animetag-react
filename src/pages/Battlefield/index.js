import { useFavoritosContext } from "contextos/Favoritos";
import styles from "./Battlefield.module.css";
import { useState, useEffect } from "react";
import pokeball1 from "./pokeball_1.png";
import pokeball2 from "./pokeball_2.png";
import pokeball3 from "./pokeball_3.png";
import { usePokemonListWithDataContext } from "contextos/PokemonListWithData";

function Battlefield() {
    const [selectedPokemon, setselectedPokemon] = useState(null);
    const [selectedEnemyPokemon, setselectedEnemyPokemon] = useState(null);
    const { pokemonListWithData } = usePokemonListWithDataContext();
    const { favorito } = useFavoritosContext();
    const [enemyPokemons, setEnemyPokemons] = useState([]);

    // Gerar os Pokémon inimigos apenas uma vez, quando o componente é montado
    useEffect(() => {
        const randomEnemyPokemons = getRandomPokemons(pokemonListWithData);
        setEnemyPokemons(randomEnemyPokemons);
    }, [pokemonListWithData]);

    const playerPkmns = favorito.slice(0, 4);

    function escolherPokemon(id) {
        if (!id) return
        setselectedPokemon(playerPkmns.find((pokemon) => pokemon.id === id));
        escolherPokemonAleatorio()
    }

    function escolherPokemonAleatorio() {
        const randomIndex = Math.floor(Math.random() * enemyPokemons.length);
        const randomPokemon = enemyPokemons[randomIndex];
        setselectedEnemyPokemon(randomPokemon);
    }

    function getRandomPokemons(pokemonList) {
        if(!pokemonList) return
        const numberOfPokemons = pokemonList.length;
        const selectedPokemons = [];
        while (selectedPokemons.length < 4) {
            const randomIndex = Math.floor(Math.random() * numberOfPokemons);
            const randomPokemon = pokemonList[randomIndex];
            console.log('randomPokemon:', randomPokemon);
            if (randomPokemon && !selectedPokemons.includes(randomPokemon) && randomPokemon.sprites.front_default) {
                selectedPokemons.push(randomPokemon);
            }
        }
        return selectedPokemons;
    }


    return (
        <section className={styles.container}>
            <div className={styles.enemy_side}>
                <div className={styles.l_enemy_side}>
                    <div className={styles.enemy_pkmns}>
                        {enemyPokemons.map((pokemon) => (
                            <div className={styles.enemy_pkmn} key={pokemon.id}>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.r_enemy_side}>
                    <div className={styles.enemy_pokemon}>
                        {selectedEnemyPokemon && (
                            <div className={styles.enemy_pokemon}>
                                <span className={styles.pokemon_name}>
                                    {selectedEnemyPokemon.name}
                                </span>
                                <img
                                    className={styles.pokemon_img}
                                    src={selectedEnemyPokemon.sprites.front_default}
                                    alt={selectedEnemyPokemon.name}
                                />
                                <div className={styles.pokemon_stats}>
                                    <div className={styles.button_wrapper}>
                                        <div className={styles.atck_button}>
                                            <img
                                                onClick={() => console.log('Ataque 1')}
                                                className={styles.atck_img}
                                                src={pokeball1}
                                                alt="Ataque 1"
                                            />
                                        </div>
                                        <span>Height: {selectedEnemyPokemon.heightInMeters}</span>
                                    </div>

                                    <div className={styles.button_wrapper}>
                                        <div className={styles.atck_button}>
                                            <img
                                                onClick={() => console.log('Ataque 2')}
                                                className={styles.atck_img}
                                                src={pokeball2}
                                                alt="Ataque 2"
                                            />
                                        </div>
                                        <span>Weight: {selectedEnemyPokemon.weightInKilograms}</span>
                                    </div>

                                    <div className={styles.button_wrapper}>
                                        <div className={styles.atck_button}>
                                            <img
                                                onClick={() => console.log('Ataque 3')}
                                                className={styles.atck_img}
                                                src={pokeball3}
                                                alt="Ataque 3"
                                            />
                                        </div>
                                        <span>Type: {selectedEnemyPokemon.types[0]}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.player_side}>
                <div className={styles.l_player_side}>
                    <div className={styles.player_pokemon}>
                        {selectedPokemon && (
                            <div className={styles.player_pokemon}>
                                <span className={styles.pokemon_name}>
                                    {selectedPokemon.name}
                                </span>
                                <img
                                    className={styles.pokemon_img}
                                    src={selectedPokemon.sprites.other.showdown.front_default} alt={selectedPokemon.name} />
                                <div className={styles.pokemon_stats}>
                                    <div className={styles.button_wrapper}>
                                        <div className={styles.atck_button}>
                                            <img
                                                onClick={() => console.log('Ataque 1')}
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
                                                onClick={() => console.log('Ataque 2')}
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
                                                onClick={() => console.log('Ataque 3')}
                                                className={styles.atck_img}
                                                src={pokeball3}
                                                alt="Ataque 3"
                                            />
                                        </div>
                                        <span>Type: {selectedPokemon.types[0]}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.r_player_side}>
                    <div className={styles.player_pkmns}>
                        {playerPkmns.map((pokemon) => (
                            <div className={styles.player_pkmn} key={pokemon.id}>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <button
                                    onClick={() =>
                                        escolherPokemon(pokemon.id)
                                    }
                                >{pokemon.name}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Battlefield;
