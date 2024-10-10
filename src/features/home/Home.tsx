/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { ContainerChallenge } from "./Home.style";
import { getAllPokemons } from "../../api/pokemon";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { setPokemons } from "../../redux/slices";
import ListPokemons from "../../components/listPokemons/ListPokemons";
import PokemonPrepare from "../../components/pokemonPrepare/PokemonPrepare";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await getAllPokemons();
      response()
        .then(async (resp: any) => {
          const respList = resp.data.results;
          try {
            const list = await Promise.all(
              respList.map(async (pokemon: any) => {
                const pokemonDetails = await axios.get(pokemon.url);
                return {
                  image: pokemonDetails.data.sprites.front_default,
                  name: pokemonDetails.data.name,
                  id: pokemonDetails.data.id,
                  height: pokemonDetails.data.height,
                  type: pokemonDetails.data.types,
                  statistics: pokemonDetails.data.stats
                };
              })
            );
            dispatch(setPokemons(list));
          } catch (err) {
            console.error("Hubo un problema con la solicitud:", err);
          }
        })
        .catch((err: any) => {
          console.error("Hubo un problema con la solicitud:", err);
        });
    };
    fetchData();
  }, [dispatch]);

  return (
    <ContainerChallenge>
      <ListPokemons />
      <PokemonPrepare />
    </ContainerChallenge>
  );
};

export default Home;
