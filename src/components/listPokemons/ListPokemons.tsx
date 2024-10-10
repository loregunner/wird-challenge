/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import {
  addPokemons,
  setPokemonDetail,
  setPokemonsL,
} from "../../redux/slices";
import { WrapperCard, WrapperList } from "./ListPokemons.style";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { LibsSVG } from "../../utils/libsSVG";
import { newArrayFilter } from "./ListPokemons.utils";
import useMediaCustom from "../../hooks/useMediaCustom";
import Pagination from "../pagination/Pagination";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";

const ListPokemons = () => {
  const { isDesktop } = useMediaCustom();
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const pokemonsList = useSelector(addPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  useEffect(() => {
    if (isDesktop) {
      setPostsPerPage(15);
    }
  }, [isDesktop]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newArrayFilter(pokemonsList, query).slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const addPokeCombat = (item: any) => {
    dispatch(setPokemonsL(item));
  };

  const addPokeDetail = (item: any) => {
    dispatch(setPokemonDetail(item));
  };

  return (
    <WrapperList>
      <div className="header_list">
        <img src={logo} alt="logo" />
        <div className="input_group_filter">
          <i aria-hidden="true">
            <img src={LibsSVG.search} alt="icon_search" />
          </i>
          <input
            className="search"
            placeholder="Buscar"
            onChange={(event) => {
              setQuery(event.target.value);
            }}></input>
        </div>
      </div>
      <WrapperCard>
        {newArrayFilter(currentPosts, query).map(
          (pokemon: any, index: number) => (
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
                    src={LibsSVG.more}
                    alt={pokemon.name}
                    onClick={() => addPokeCombat(pokemon)}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </WrapperCard>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={pokemonsList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginate={paginate}
      />
    </WrapperList>
  );
};

export default ListPokemons;
