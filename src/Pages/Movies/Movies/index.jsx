import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from '@mui/material';

import { fetchMovies } from 'Services/movieApi'
import { getMovies } from "Redux/Movies/movieSlice";
import { MovieDetails } from '../Shared/MovieDetails'
import { MovieList } from '../Shared/MovieList'
import { SearchMovies } from '../SearchMovies'

import style from './style.module.scss'

export const Movies = () => {
  const dispatch = useDispatch()
  const { movies } = useSelector(state => state)
  const [ movieList, setMovieList ] = useState([])
  const [ movieDetails, setMovieDetails ] = useState(null)
  const [ movieSearched, setMovieSearched ] = useState("")
  
  useEffect(() => {
    if (movies.length < 1) {
      console.log('INIT')
      fetchMovies("discover/movie").then(result => {
        dispatch(getMovies(result?.results))
        setMovieList(result?.results);
        setMovieDetails(result?.results[0])
      })
    } else {
      setMovieList(movies)
    }
  }, [dispatch])

  const getMovieDetails = (movie) => {
    setMovieDetails(movie)
  }

  const handleSearchMovie = (target) => {
    setMovieSearched(target.value)
  }
  useEffect(() => {
      const delayedRequest = setTimeout(() => {
      if (movieSearched.length >= 3) {
        fetchMovies("search/movie", movieSearched).then(result => {
          dispatch(getMovies(result?.results))
          setMovieList(result?.results);
          setMovieDetails(result?.results[0])
        })
      }
    }, 1000)
    return () => clearTimeout(delayedRequest)
  }, [movieSearched])

  return (
    <Box>
      <SearchMovies 
        handleSearchMovie={handleSearchMovie}
        search={movieSearched}
      />

      <Box className={style.movieBlocks}>
        <MovieList movieList={movieList} getMovieDetails={getMovieDetails} />
        {(movieSearched && movieList.length < 1) && 
        <Typography component="p" variant="body1">We wouldn't find any movies. Please refresh or search another title.</Typography>
        }
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