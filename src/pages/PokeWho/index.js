import React, { useEffect, useState } from 'react';
import styles from './PokeWho.module.css';
import { usePokemonListWithDataContext } from 'contextos/PokemonListWithData';

function PokeWho() {
    const { pokemonListWithData } = usePokemonListWithDataContext();
    const [pokemon, setPokemon] = useState(null);
    const [score, setScore] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [revealed, setRevealed] = useState(false);
    const [disableOptions, setDisableOptions] = useState(false);
    const [correctOption, setCorrectOption] = useState(null);

    useEffect(() => {
        if (!pokemonListWithData) return;
        const numberOfPokemons = 150;
        const randomIndex = Math.floor(Math.random() * numberOfPokemons);
        const randomPokemon = pokemonListWithData[randomIndex];
        if (randomPokemon && randomPokemon.sprites.front_default) {
            setPokemon(randomPokemon);
            const selectedOptions = [];
            while (selectedOptions.length < 3) {
                const optionIndex = Math.floor(Math.random() * numberOfPokemons);
                const optionPokemon = pokemonListWithData[optionIndex];
                if (optionPokemon && optionPokemon.name !== randomPokemon.name && !selectedOptions.includes(optionPokemon.name)) {
                    selectedOptions.push(optionPokemon.name);
                }
            }
            selectedOptions.push(randomPokemon.name);
            selectedOptions.sort(() => Math.random() - 0.5);
            setOptions(selectedOptions);
            setCorrectOption(randomPokemon.name);
        }
    }, [score, pokemonListWithData]);

    const handleOptionClick = (option) => {
        if (revealed) return;
        setSelectedOption(option);
        setDisableOptions(true);
        setRevealed(true);
        setTimeout(() => {
            if (option === pokemon.name) {
                setScore(score + 1);
            } else {
                setScore(0);
            }
            setPokemon(null);
            setRevealed(false);
            setDisableOptions(false);
        }, 5000); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.carrousell}></div>
            <div className={styles.parentContainer}>
                <div className={!revealed ? styles.fadded : styles.pokemon}>
                    <img
                        className={styles.pokemon_image}
                        src={pokemon ? pokemon.sprites.front_default : ""}
                        alt="Quem é esse pokemon?"
                    />
                </div>
                <div className={styles.score}>
                    <h2>{score}</h2>
                </div>
            </div>
            <div className={styles.grid_container}>
                {options.map((option, index) => (
                    <div className={styles.grid_item} key={index}>
                        <button
                            className={`${styles.option_button} 
                            ${selectedOption === option && !revealed ? styles.blink : ""} 
                            ${revealed ? option === correctOption ?
                                    `${styles.option_button} ${styles.option_button_correct}` :
                                    `${styles.option_button} ${option === selectedOption ? styles.option_button_incorrect : ""}` : ""}`}
                            onClick={() => handleOptionClick(option)}
                            disabled={disableOptions}
                        >
                            {option}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokeWho;
