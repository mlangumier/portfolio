import React from 'react'
import { Box } from '@mui/material'

import { imgApiMovie } from 'Services/movieApi'

import style from './style.module.scss'

export const MovieDetails = ({ movie:{ 
  original_title,
  release_date,
  overview,
  poster_path,
  vote_average,
 } }) => {
  return (
    <Box className={style.container}>
      <h3>{original_title}</h3>
      <img src={`${imgApiMovie}${poster_path}`} alt={original_title} className={style.image} />
      <p>Released: {release_date}</p>
      <p>Rating: {vote_average}</p>
      <p>{overview}</p>
    </Box>
  )
}