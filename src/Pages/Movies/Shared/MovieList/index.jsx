import { Box } from "@mui/material"

import { MovieItem } from '../MovieItem'

import style from './style.module.scss'

export const MovieList = ({ 
  movieList, 
  getMovieDetails 
}) => {
  return (
    <Box className={style.container}>
      {movieList?.map((movie, index) => (
        <MovieItem  key={index} movie={movie} getMovieDetails={() => getMovieDetails(movie)} 
        />
      ))}
    </Box>
  )
}