import React from 'react';
import styles from './NameFilter.module.css';

function NameFilter({ onChange }) {
    return (
        <div className={styles.name}>
            <label htmlFor="pokemonName">Search by name:</label>
            <input
                type="text"
                id="pokemonName"
                name="pokemonName"
                onChange={onChange}
                placeholder="Enter Pokémon name"
            />
        </div>
    );
}

export default NameFilter;
