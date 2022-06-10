import axios from "axios"

const baseUrl = "https://api.themoviedb.org/3";
const api_key = process.env.REACT_APP_MOVIE_API_KEY;

export const fetchMovies = async (search) => {
  const data = await axios.get(`${baseUrl}/${search}`, {
    params: { api_key }
  })
  if (data?.status === 200) {
    return data?.data;
  } else {
    return {status: data?.status, statusText: data?.statusText}
  }
}