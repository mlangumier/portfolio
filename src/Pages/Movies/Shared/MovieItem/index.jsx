import React from 'react'
import { Box, Typography } from '@mui/material'

import { imgApiMovie } from 'Services/movieApi'

import style from './style.module.scss'

export const MovieItem = ({ movie: {
  title, 
  poster_path,
},
getMovieDetails
}) => {
  return (
    <Box onClick={getMovieDetails} className={style.movieBox}>
      <img src={`${imgApiMovie}${poster_path}`} alt={title}/>
      <Typography 
        component="p"
        variant="body1"
        className={style.title}
      >{title.toUpperCase()}</Typography>
      {/* <p>Favorite</p> */}
      {/* <p>See on IMBD</p> */}
    </Box>
  )
}
