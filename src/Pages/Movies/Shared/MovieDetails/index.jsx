import style from './style.module.scss'
import { imgApiMovie } from 'Services/movieApi'
import { Box } from '@mui/material'
import React from 'react'

export const MovieDetails = (props) => {
  const { title, released, description, thumbnail, rating } = props

  return (
    <Box className={style.container}>
      <h3>{title}</h3>
      <img src={`${imgApiMovie}${thumbnail}`} alt={title} className={style.image} />
      <p>Released: {released}</p>
      <p>Rating: {rating}</p>
      <p>{description}</p>
    </Box>
  )
}