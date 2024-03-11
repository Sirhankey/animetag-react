import { createContext, useContext, useState } from "react";

export const PokemonListContext = createContext();
PokemonListContext.displayName = 'PokemonList';

export function PokemonListProvider({ children }) {
    const [pokemonList, setPokemonList] = useState([]);

    return (
        <PokemonListContext.Provider
            value={{ pokemonList, setPokemonList }}>
            {children}
        </PokemonListContext.Provider>
    );
}

export function usePokemonListContext() {
    const { pokemonList, setPokemonList } = useContext(PokemonListContext);

    return { pokemonList, setPokemonList };
}