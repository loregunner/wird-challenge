/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  addPokemonDetail,
  addPokemonsList,
  setDeleteItemL,
  setPokemonsL,
} from "../../redux/slices";
import { WrapperDetail } from "./DetailPokemon.style";
import logo from "../../assets/logo.png";
import { LibsSVG } from "../../utils/libsSVG";
import { useAppDispatch } from "../../redux/hooks";
import { colorPicker, statTranslations } from "./DetailPokemon.utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DetailPokemon = () => {
  const dispatch = useAppDispatch();
  const pokemonsListCombat = useSelector(addPokemonsList);
  const pokemonDetail = useSelector(addPokemonDetail);
  const [stats, setStats] = useState([]);
  const navigate = useNavigate();

  const fetchStatData = async (stat: any) => {
    try {
      const response = await axios.get(stat.stat.url);
      return {
        ...stat,
        additionalData: response.data,
      };
    } catch (error) {
      console.error(`Error fetching data for ${stat.stat.name}:`, error);
      return stat;
    }
  };

  const fetchAllStatistics = async (statistics: any) => {
    const promises = statistics.map((stat: any) => fetchStatData(stat));
    const results = await Promise.all(promises);
    return results;
  };

  useEffect(() => {
    if (pokemonDetail?.statistics) {
      fetchAllStatistics(pokemonDetail.statistics)
        .then((updatedStatistics: any) => {
          setStats(updatedStatistics);
        })
        .catch((error) => {
          console.error("Error fetching statistics:", error);
        });
    }
  }, [pokemonDetail]);

  const goToAbout = () => {
    navigate("/");
  };

  const addPokeCombat = (item: any) => {
    dispatch(setPokemonsL(item));
  };

  const deletePokeCombat = (item: any) => {
    dispatch(setDeleteItemL(item));
  };

  return (
    <WrapperDetail>
      <div className="header_list">
        <img src={logo} alt="logo" />
        {!pokemonsListCombat.some(
          (item: any) => item.id === pokemonDetail.id
        ) ? (
          <button onClick={() => addPokeCombat(pokemonDetail)}>
            <img src={LibsSVG.more} alt="add" />
            Agregar a la lista
          </button>
        ) : (
          <button onClick={() => deletePokeCombat(pokemonDetail)}>
            <img src={LibsSVG.crash} alt="crash" />
            Eliminar de la lista
          </button>
        )}
      </div>
      <div className="container_back" onClick={() => goToAbout()}>
        <img src={LibsSVG.arrow} alt="arrow" />
        <span>Volver</span>
      </div>
      <div className="container_detail">
        <img src={pokemonDetail.image} alt={pokemonDetail.name} />
        <div className="detail_container">
          <div>
            <h2>
              <b>Nombre:</b> {pokemonDetail?.name}
            </h2>
            <p>
              <b>Número:</b> {pokemonDetail?.id}
            </p>
            <p>
              <b>Altura:</b> {pokemonDetail?.height}
            </p>
            <p>
              <b>Tipo:</b>
              {pokemonDetail?.type?.map((item: any, index: number) => (
                <span
                  className="types_container"
                  key={index}
                  style={{ backgroundColor: colorPicker(item.type.name) }}>
                  {item.type.name}
                </span>
              ))}
            </p>
          </div>
          <div className="detail_statics">
            {stats?.map((item: any, index: number) => (
              <div className="detail_stats" key={index}>
                <p>{statTranslations[item.stat.name]}:</p>
                <span>{item.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WrapperDetail>
  );
};

export default DetailPokemon;
