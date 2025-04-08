const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const responce = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const data = await responce.json()

  // console.log(data);

  // console.log(data.results)
  
  return data.results;


};

export const searchMovies = async (query) => {
    const responce = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  
    const data = await responce.json()
  
    // console.log(data);
    // console.log(data.results);
  
    return data.results;
  
  };