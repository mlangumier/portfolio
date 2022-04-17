import { Box, Divider } from "@mui/material"
import React, { FC } from "react"
import { NavLink } from "react-router-dom"

type MenuItem = {
  name: string,
  path: string,
}

type MenuItemsList = {
  menuItems: MenuItem[]
}

const MenuTop: FC<MenuItemsList> = ({ menuItems }) => {
  return (
    <React.Fragment>
      <Box sx={{
        height:"64px", 
        display:"flex", 
        justifyContent:"space-around",
        alignItems:"center",
        // background:'lightskyblue',
        // borderBottom:'1px solid #bbb',
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