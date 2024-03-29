import { createContext, useContext, useState } from "react";

export const PokemonListWithDataContext = createContext();
PokemonListWithDataContext.displayName = 'PokemonListWithData';

export function PokemonListWithDataProvider({ children }) {
    const [pokemonListWithData, setPokemonListWithData] = useState([]);

    return (
        <PokemonListWithDataContext.Provider
            value={{ pokemonListWithData, setPokemonListWithData }}>
            {children}
        </PokemonListWithDataContext.Provider>
    );
}

export function usePokemonListWithDataContext() {
    const { pokemonListWithData, setPokemonListWithData } = useContext(PokemonListWithDataContext);

    return { pokemonListWithData, setPokemonListWithData };
}