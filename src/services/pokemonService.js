import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function getAllPokemons(limit = 20) {
    // console.log('getAllPokemons')
    return axios.get(`${BASE_URL}?limit=${limit}`)
        .then(response => response.data)
        .catch(error => console.log(error));
}

function getPokemonByName(name) {
    return axios.get(`${BASE_URL}/${name}`)
        .then(response => response.data)
        .catch(error => console.log(error));
}

export { getAllPokemons, getPokemonByName };