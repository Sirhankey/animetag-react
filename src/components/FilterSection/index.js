import GenerationFilter from 'components/GenerationFilter';
import styles from './FilterSection.module.css';
import React, { useState } from 'react';
import NameFilter from 'components/NameFilter';

function FilterSection({ onFilterChange }) {
    const [generationFilter, setGenerationFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');

    const handleGenerationChange = (event) => {
        // console.log('AQUI: ',event);
        const selectedGeneration = event;
        setGenerationFilter(selectedGeneration);
        // Passa a informação do filtro para o componente pai
        onFilterChange({ generation: selectedGeneration, name: nameFilter });
    };

    const handleNameChange = (event) => {
        const enteredName = event.target.value;
        console.log('enteredName:', enteredName);
        setNameFilter(enteredName);
        // Passa a informação do filtro para o componente pai
        onFilterChange({ generation: generationFilter, name: enteredName });
    };

    return (
        <div className={styles.filter}>
            <GenerationFilter onChange={handleGenerationChange} />
            <NameFilter onChange={handleNameChange} />
        </div>
    );
}

export default FilterSection;