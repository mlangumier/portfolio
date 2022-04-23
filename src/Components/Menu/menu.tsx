import { Box, Divider } from "@mui/material"
import React, { FC } from "react"
import { NavLink } from "react-router-dom"

type Props = {
  menuItems: {
    name: string,
    path: string,
  }[],
  navbarwidth: number,
}

const MenuTop = ({ menuItems, navbarwidth }: Props) => {
  return (
    <React.Fragment>
      <Box sx={{
        height:"64px", 
        display:"flex", 
        justifyContent:"space-evenly",
        alignItems:"center",
        background:'lightskyblue',
      }}>
        {menuItems.map((item, index) => (
          <NavLink to={item?.path} key={`MenuItem-${index}`}>{item?.name}</NavLink>
          ))}
      </Box>
      <Divider />
    </React.Fragment>
  )
}
export default MenuTop