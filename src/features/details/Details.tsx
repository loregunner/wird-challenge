import { ContainerChallenge } from "../home/Home.style";
import PokemonPrepare from "../../components/pokemonPrepare/PokemonPrepare";
import DetailPokemon from "../../components/detailPokemon/DetailPokemon";

const Details = () => {

  return (
    <ContainerChallenge>
      <DetailPokemon />
      <PokemonPrepare />
    </ContainerChallenge>
  );
};

export default Details;
