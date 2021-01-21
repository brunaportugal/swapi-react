const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVORITEMOVIES":
      return {
        ...state,
        favoriteMovies: [action.payload, ...state.favoriteMovies],
      };
    case "REMOVE_MOVIE_FROM_FAVORITEMOVIES":
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (film) => film.episode_id !== action.payload.episode_id
        ),
      };
    // case "ADD_CHARACTER_TO_FAVORITES":
    //   return {
    //     ...state,
    //     favoriteCharacters: [action.payload, ...state.favoriteCharacters],
    //   };
    // case "REMOVE_CHARACTER_FROM_FAVORITES":
    //   return {
    //     ...state,
    //     favoriteCharacters: state.favoriteCharacters.filter(
    //       (character) => character.id !== action.payload.id
    //     ),
    //   };
    default:
      return state;
  }
};

export default AppReducer;
