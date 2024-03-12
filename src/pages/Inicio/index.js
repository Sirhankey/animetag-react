import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";
import { getAllPokemons, getPokemonByName } from "services/pokemonService";
import FilterSection from "components/FilterSection";
import Container from "components/Container";
import LoadingSpinner from "components/Loading";
import { usePokemonListContext } from "contextos/PokemonList";
import DarkModeComponent from "components/DarkMode";
import DarkMode from "components/DarkMode";


function Inicio() {
    const [pokemonListWithData, setPokemonListWithData] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonListWithData);
    const [isLoading, setIsLoading] = useState(true);
    const { pokemonList, setPokemonList } = usePokemonListContext();
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                if (pokemonList.length > 0) {
                    setPokemonListWithData(pokemonList);
                    setFilteredPokemonList(pokemonList);
                    defaultList(pokemonList);
                    setIsLoading(false);
                } else {
                    const pokemonList = await fetchPokemons(1302);
                    const pokemonListWithData = await fetchPokemonsWithData(pokemonList);
                    setPokemonListWithData(pokemonListWithData);
                    setPokemonList(pokemonListWithData);
                    if (filteredPokemonList.length === 0) {
                        defaultList(pokemonListWithData);
                    }
                    console.log('pokemonListWithData:', pokemonListWithData);
                    setIsLoading(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    function defaultList(filteredList) {
        const minId = 1;
        const maxId = 151;
        console.log('filteredList:', filteredList);
        filteredList = filteredList.filter(pokemon => (pokemon && pokemon.id) && (pokemon.id >= minId && pokemon.id <= maxId));
        setFilteredPokemonList(filteredList);
    }

    async function fetchPokemons(limit) {
        try {
            const response = await getAllPokemons(limit);
            return response.results.map((pokemon, index) => ({
                name: pokemon.name,
                id: index + 1
            }));
        } catch (error) {
            throw error;
        }
    }

    async function fetchPokemonsWithData(pokemonList) {
        try {
            const pokemonListWithData = await Promise.all(pokemonList.map(async (pokemon) => {
                try {
                    const data = await getPokemonByName(pokemon.name);
                    if (!data) return;
                    const heightInMeters = (data.height / 10).toFixed(2);
                    const weightInKilograms = (data.weight / 10).toFixed(2);
                    const types = data.types.map((type) => type.type.name);

                    return {
                        id: data.id.toString(),
                        height: data.height,
                        heightInMeters: heightInMeters,
                        name: data.name,
                        sprites: data.sprites,
                        weight: data.weight,
                        weightInKilograms: weightInKilograms,
                        types: types
                    };
                } catch (error) {
                    console.error(error);
                    return null;
                }
            }));

            // Filter out null values from the array
            return pokemonListWithData.filter((pokemon) => pokemon !== null);
        } catch (error) {
            throw error;
        }
    }

    const handleFilterChange = ({ generation, name }) => {
        // console.log('generation:', generation, 'name:', name);
        const { minId, maxId } = generation;
        // Aplica os filtros à lista de Pokémon
        let filteredList = pokemonListWithData;
        console.log('filteredList:', filteredList);
        if (filteredList.length > 0 && minId && maxId) {
            // Filtra por geração
            // console.log(minId, maxId);
            filteredList = filteredList.filter(pokemon => pokemon && pokemon.id >= minId && pokemon.id <= maxId);
            // console.log(filteredList);
        }
        if (name) {
            // Filtra por nome
            filteredList = filteredList.filter(pokemon => pokemon && pokemon.name.toLowerCase().includes(name.toLowerCase()));
        }
        // Define a lista filtrada
        setFilteredPokemonList(filteredList);
    };

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Escolha seu Pokemon!</h1>
            </Titulo>
            <div className={styles.darkMode}>
                <DarkMode />
            </div>
            <Container>
                <FilterSection onFilterChange={handleFilterChange} />
            </Container>
            <div>
                {isLoading ? <LoadingSpinner /> : <section className={styles.container}>
                    {filteredPokemonList.length > 0 ? filteredPokemonList.map((pokemon) => (
                        <Card {...pokemon} key={pokemon.id} />
                    )) : null}
                </section>}
            </div>
        </>
    );
}

export default Inicio;