export default (state, action) => {
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
          (film) => film.episode_id !== action.payload
        ),
      };
    default:
      return state;
  }
};
