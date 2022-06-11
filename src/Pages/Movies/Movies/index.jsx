import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Box } from '@mui/material';

import { fetchMovies } from 'Services/movieApi'
import { getMovies } from "Redux/Movies/movieSlice";
import { MovieDetails } from '../Shared/MovieDetails'
import { MovieList } from '../Shared/MovieList'

import style from './style.module.scss'
import { InputComponent } from 'Components/Forms/input';

export const Movies = () => {
  const dispatch = useDispatch()
  const [ movieList, setMovieList ] = useState([])
  // const [ navigation, setNavigation ] = useState({})
  const [ movieDetails, setMovieDetails ] = useState(null)
  
  useEffect(() => {
    fetchMovies("discover/movie").then(result => {
      dispatch(getMovies(result?.results))
      setMovieList(result?.results);
      // setNavigation({
      //   page: result?.page,
      //   totalPages: result?.total_pages,
      //   totalResults: result?.total_results,
      // })
    })
  }, [dispatch])

  // const navigatePage = (direction) => {
  //   console.log('NEXT PAGE:', direction)
  // }
  
  const getMovieDetails = (movie) => {
    setMovieDetails(movie)
  }

  return (
    <Box>
      {/* <InputComponent 
        name="movieSearch"
        label="Search..." 
        value={""}
        onChange={""}
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
      {/* <Box style={{display:'flex', justifyContent:'space-between', width:'200px'}}>
        <button type='button' onClick={() => navigatePage(-1)}> {'<<'} </button>
        <p>Page {navigation?.page}/{navigation?.totalPages}</p>
        <button type='button' onClick={() => navigatePage(+1)}> {'>>'} </button>
      </Box> */}
    </Box>
  )
}