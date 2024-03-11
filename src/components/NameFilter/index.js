import React from 'react';
import styles from './NameFilter.module.css';
import { Input, Label } from 'reactstrap';

function NameFilter({ onChange }) {
    return (
        <div className={styles.name}>
            <Label for="exampleEmail">
                Pokemon Name
            </Label>
            <Input
                id="pokemonName"
                name="pokemonName"
                placeholder="Enter a Pokémon name"
                type="text"
                onChange={onChange}
            />
        </div>
    );
}

export default NameFilter;
