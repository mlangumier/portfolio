import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchMovies } from 'Services/movieApi'
import { getMovies } from "Redux/Movies/movieSlice";
import { Box } from '@mui/material';

export const Movies = () => {
  const dispatch = useDispatch()
  const [ movieList, setMovieList ] = useState([])
  const [ navigation, setNavigation ] = useState({})
  const [ movieDetails, setMovieDetails ] = useState({})
  
  useEffect(() => {
    fetchMovies("discover/movie").then(result => {
      dispatch(getMovies(result?.results))
      setMovieList(result?.results);
      setNavigation({
        page: result?.page,
        totalPages: result?.total_pages,
        totalResults: result?.total_results,
      })
    })
  }, [])
  // console.log('MOVIES:', movieList, navigation)

  const navigatePage = (direction) => {
    console.log('NEXT PAGE:', direction)
  }
  
  const getMovieDetails = (movieId) => {
    fetchMovies(`movie/${movieId}`).then(result => {
      console.log('MOVIE DETAILS:', result)
      setMovieDetails(result)
    })
  }

  return (
    <Box>
      <h2>MOVIE LIST</h2>
      <Box style={{margin:'40px 10px'}}>
        {movieList?.map((movie, index) => {
          return <p key={index} onClick={() => getMovieDetails(movie?.id)}>{movie?.title}</p>
        })}
      </Box>
        {movieDetails &&
          <Box>
            <h3>{movieDetails?.original_title}</h3>
            <p>Released: {movieDetails?.release_date}</p>
            <p>{movieDetails?.overview}</p>
          </Box>
        }
      {/* <Box style={{display:'flex', justifyContent:'space-between', width:'200px'}}>
        <button type='button' onClick={() => navigatePage(-1)}> {'<<'} </button>
        <p>Page {navigation?.page}/{navigation?.totalPages}</p>
        <button type='button' onClick={() => navigatePage(+1)}> {'>>'} </button>
      </Box> */}
    </Box>
  )
}