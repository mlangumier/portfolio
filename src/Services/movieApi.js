import axios from "axios"

const baseUrl = "https://api.themoviedb.org/3";
const api_key = process.env.REACT_APP_MOVIE_API_KEY;

export const fetchMovies = async ( type, search ) => {
  const data = await axios.get(`${baseUrl}/${type}`, {
    params: { 
      api_key,
      query: search,
    },
    
  })
  if (data?.status === 200) {
    return data?.data;
  } else {
    return {status: data?.status, statusText: data?.statusText}
  }
}

export const imgApiMovie = 'https://image.tmdb.org/t/p/w500/'