import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favoriteMovies: localStorage.getItem("favoriteMovies")
    ? JSON.parse(localStorage.getItem("favoriteMovies"))
    : []
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(state.favoriteMovies));
  }, [state]);

  // actions
  const addMovieToFavoriteMovies = (film) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITEMOVIES", payload: film });
  };

  const removeMovieFromFavoriteMovies = (film) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITEMOVIES", payload: film });
  };

  return (
    <GlobalContext.Provider
      value={{
        favoriteMovies: state.favoriteMovies,
        addMovieToFavoriteMovies,
        removeMovieFromFavoriteMovies
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
