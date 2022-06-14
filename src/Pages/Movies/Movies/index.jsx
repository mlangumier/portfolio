import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Box } from '@mui/material';

import { fetchMovies } from 'Services/movieApi'
import { getMovies } from "Redux/Movies/movieSlice";
import { MovieDetails } from '../Shared/MovieDetails'
import { MovieList } from '../Shared/MovieList'
import { SearchMovies } from '../SearchMovies'

import style from './style.module.scss'

export const Movies = () => {
  const dispatch = useDispatch()
  const [ movieList, setMovieList ] = useState([])
  const [ movieDetails, setMovieDetails ] = useState(null)
  
  useEffect(() => {
    fetchMovies("discover/movie").then(result => {
      dispatch(getMovies(result?.results))
      setMovieList(result?.results);
      setMovieDetails(result?.results[0])
    })
  }, [dispatch])

  const getMovieDetails = (movie) => {
    setMovieDetails(movie)
  }

  const searchMovie = (target) => {
    console.log('SEARCH:', target)
  }

  return (
    <Box>
      {/* <SearchMovies 
        searchMovie={searchMovie}
      /> */}
      <Box className={style.movieBlocks}>
        <MovieList movieList={movieList} getMovieDetails={getMovieDetails} />
        <Box className={style.movieDetails}>
          {movieDetails 
            ? <MovieDetails movie={movieDetails} />
            : <p>Click on any movie to see its informations</p>
          }
        </Box>
      </Box>
    </Box>
  )
}