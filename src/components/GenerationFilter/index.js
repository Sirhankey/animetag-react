import React from 'react';
import styles from './GenerationFilter.module.css';
import { Button, ButtonGroup } from 'reactstrap';

function GenerationFilter({ onChange }) {
    const generations = [
        { id: '1', label: 'Gen 1', minId: 1, maxId: 151 },
        { id: '2', label: 'Gen 2', minId: 152, maxId: 251 },
        { id: '3', label: 'Gen 3', minId: 252, maxId: 386 },
        { id: '4', label: 'Gen 4', minId: 387, maxId: 493 },
        { id: '5', label: 'Gen 5', minId: 494, maxId: 649 },
        { id: '6', label: 'Gen 6', minId: 650, maxId: 721 },
        { id: '7', label: 'Gen 7', minId: 722, maxId: 809 },
        { id: '8', label: 'Gen 8', minId: 810, maxId: 905 },
        { id: '9', label: 'Gen 9', minId: 906, maxId: 1302 }
    ];

    const handleGenerationChange = (event) => {
        if (event.target.value) {
            const selectedGeneration = event.target.value;
            const generation = generations.find(gen => gen.id === selectedGeneration);
            // console.log(generation)
            if (generation) {
                onChange({ minId: generation.minId, maxId: generation.maxId });
            }
        }
    };

    return (
        <div className={styles.container}>
            {generations.map(gen => (
                <div key={gen.id}>
                    {/* <label className={styles.label}>
                        <input
                            type="radio"
                            name="generation"
                            value={gen.id}
                            onChange={handleGenerationChange}
                        />
                        {gen.label}
                    </label> */}

                    <ButtonGroup className="my-2"
                        size="sm">
                        <Button
                            color="primary"
                            outline
                            onClick={() => handleGenerationChange({ target: { value: gen.id } })}>
                            {gen.label}
                        </Button>
                    </ButtonGroup>
                </div>
            ))}

        </div>
    );
}

export default GenerationFilter;
