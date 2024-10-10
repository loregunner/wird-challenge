import axios from "axios";

export const getAllPokemons = () => () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151" as string);
};
