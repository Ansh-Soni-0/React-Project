import { useEffect, useState } from "react";
import "../css/Home.css";
import MovieCard from "../conponents/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movie...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handlesearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchresults = await searchMovies(searchQuery);

      setMovies(searchresults);

      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }

    // setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handlesearch} className="search-form">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search For Movies..."
          className="search-input"
        />

        <button
          // onClick={}
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
