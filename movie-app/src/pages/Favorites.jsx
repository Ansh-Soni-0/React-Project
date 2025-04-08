import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../conponents/MovieCard";
import "../css/Favorite.css";




const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div>
        <h2 className="favorites">Your Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movie yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
};

export default Favorites;
