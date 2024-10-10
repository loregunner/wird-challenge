/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const initialState = {
  pokemons: [],
  pokemonsList: [],
  pokemonDetail: {},
} as any;

export const apiSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<any>) => {
      const newItem = action.payload;
      if (!Array.isArray(newItem)) {
        if (!state.pokemons.includes(newItem)) {
          state.pokemons.push(newItem);
        }
      } else {
        state.pokemons = action.payload;
      }
    },
    setPokemonDetail: (state, action: PayloadAction<any>) => {
      state.pokemonDetail = action.payload;
    },
    setPokemonsL: (state, action: PayloadAction<any>) => {
      const newItem = action.payload;
      if (!Array.isArray(newItem)) {
        if (
          !state.pokemonsList.some((item: any) => item.id === newItem.id) &&
          state.pokemonsList.length < 6
        ) {
          state.pokemonsList.push(newItem);
        }
      } else {
        state.pokemonsList = newItem.slice(0, 6);
      }
    },
    setDeleteItemL: (state, action) => {
      const itemIdToDelete = action.payload;
      for (let i = 0; i < state.pokemonsList.length; i++) {
        if (itemIdToDelete.id) {
          if (state.pokemonsList[i].id === itemIdToDelete.id) {
            state.pokemonsList.splice(i, 1);
            i--;
          }
        } else {
          state.pokemonsList.splice(i, 1);
          i++;
        }
      }
    },
  },
});

export const { setPokemons, setPokemonDetail, setPokemonsL, setDeleteItemL } = apiSlice.actions;

export const addPokemons = (state: AppState) => state.api.pokemons;
export const addPokemonsList = (state: AppState) => state.api.pokemonsList;
export const addPokemonDetail = (state: AppState) => state.api.pokemonDetail;

export default apiSlice.reducer;
