import style from './style.module.scss'
import { imgApiMovie } from 'Services/movieApi'
import React from 'react'
import { Box } from '@mui/material'

export const MovieItem = (props) => {
  const { id, title, thumbnail, getMovieDetails, rating } = props
  return (
    <Box onClick={() => getMovieDetails(id)} className={style.movieBox}>
      <img src={`${imgApiMovie}${thumbnail}`} alt={title}/>
      {/* <h3>{title}</h3> */}
      {/* <p>Rating: {rating}</p> */}
      {/* <p>Favorite</p> */}
    </Box>
  )
}