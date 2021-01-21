import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favoriteMovies: localStorage.getItem("favoriteMovies")
    ? JSON.parse(localStorage.getItem("favoriteMovies"))
    : []
  // favoriteCharacters: localStorage.getItem("favoriteCharacters")
  //   ? JSON.parse(localStorage.getItem("favoriteCharacters"))
  //   : []
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(state.favoriteMovies));
    // localStorage.setItem("favoriteCharacters", JSON.stringify(state.favoriteCharacters));
  }, [state]);

  // actions
  const addMovieToFavoriteMovies = (film) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITEMOVIES", payload: film });
  };

  const removeMovieFromFavoriteMovies = (film) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITEMOVIES", payload: film });
  };

  // const addCharacterToFavorites = (character) => {
  //   dispatch({ type: "ADD_CHARACTER_TO_FAVORITES", payload: character });
  // };

  // const removeCharacterFromFavorites = (character) => {
  //   dispatch({ type: "REMOVE_CHARACTER_FROM_FAVORITES", payload: character });
  // };

  return (
    <GlobalContext.Provider
      value={{
        favoriteMovies: state.favoriteMovies,
        // favoriteCharacters: state.favoriteCharacters,
        addMovieToFavoriteMovies,
        removeMovieFromFavoriteMovies,
        // addCharacterToFavorites,
        // removeCharacterFromFavorites
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
