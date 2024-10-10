/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { WrapperPrepare } from "./PokemonPrepare.style";
import {
  addPokemonsList,
  setDeleteItemL,
  setPokemonDetail,
} from "../../redux/slices";
import { WrapperCard } from "../listPokemons/ListPokemons.style";
import { LibsSVG } from "../../utils/libsSVG";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";

const PokemonPrepare = () => {
  const pokemonsListCombat = useSelector(addPokemonsList);
  const dispatch = useAppDispatch();
  const listCombat = "active-class";

  const deletePokeCombat = (item: any) => {
    dispatch(setDeleteItemL(item));
  };

  const addPokeDetail = (item: any) => {
    dispatch(setPokemonDetail(item));
  };

  return (
    <WrapperPrepare>
      <h2 className="title_prepare">Listos para el combate</h2>
      <WrapperCard listcombat={listCombat}>
        {pokemonsListCombat.map((pokemon: any, index: number) => (
          <div
            key={index}
            className="card_list"
            onClick={() => addPokeDetail(pokemon)}>
            <Link to="/details">
              <img src={pokemon.image} alt={pokemon.name} />
            </Link>
            <div className="card_container">
              <div className="card_container_header">
                <Link to="/details">
                  <h2>{pokemon.name}</h2>
                </Link>
                <img
                  src={LibsSVG.crash}
                  alt={pokemon.name}
                  onClick={(e: any) => {
                    e.stopPropagation(), deletePokeCombat(pokemon);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </WrapperCard>
    </WrapperPrepare>
  );
};

export default PokemonPrepare;
