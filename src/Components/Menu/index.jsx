import React from "react"
import { Link } from "react-router-dom"
import { Box, Divider } from "@mui/material"

import style from './style.module.scss'

export const MenuTop = ({ menuItems }) => {
  return (
    <Box className={style.container}>
      {menuItems.map((item, index) => (
        <Link to={item?.path} key={`MenuItem-${index}`}>{item?.name}</Link>
        ))}
    </Box>
  )
}