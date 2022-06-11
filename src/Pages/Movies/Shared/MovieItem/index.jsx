import React from 'react'
import { Box } from '@mui/material'

import { imgApiMovie } from 'Services/movieApi'

import style from './style.module.scss'

export const MovieItem = ({ movie: {
  original_title, 
  poster_path,
  vote_average
},
getMovieDetails
}) => {
  return (
    <Box onClick={getMovieDetails} className={style.movieBox}>
      <img src={`${imgApiMovie}${poster_path}`} alt={original_title}/>
      {/* <h3>{original_title}</h3> */}
      {/* <p>Rating: {vote_average}</p> */}
      {/* <p>Favorite</p> */}
    </Box>
  )
}
