import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from 'services/pokemonService';
import { useState } from 'react';
import styles from './Pokemon.module.css';
import { Badge } from 'reactstrap';

function Pokemon() {
    const parametros = useParams();
    const [pokemon, setPokemon] = useState({});
    getPokemonByName(parametros.id).then((response) => {
        setPokemon(response);
    });

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>PokeDex</h1>
            </Titulo>
            <section className={styles.container}>
                <div className={styles.pokemon}>
                    <div>
                        <img className={styles.pokemon__img} src={pokemon.sprites?.front_default} alt={pokemon.name} />
                    </div>
                    <div className={styles.pokemon__info}>
                        <h2>{pokemon.name}</h2>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Types:  
                            {/* Mapeia os tipos do Pokémon e renderiza Badges para cada tipo */}
                            {pokemon.types?.map((type, index) => (
                                <Badge 
                                    color='secondary'
                                    pill 
                                    key={index} 
                                    className={styles.badge}
                                >
                                    {type.type.name}
                                </Badge>
                            ))}
                        </p>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Pokemon;