/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "./customStorage";
import { apiSlice } from "./slices";

const apiPersistConfig = {
  key: "api",
  storage: storage,
  whitelist: ["pokemons", "pokemonsList", "pokemonDetail"],
};
const rootReducer = combineReducers({
  api: persistReducer(apiPersistConfig, apiSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger as any),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<Store["getState"]>;
export type AppDispatch = typeof store.dispatch;
