import React from "react"
import { Box, Divider } from "@mui/material"
import { Link } from "react-router-dom"

type Props = {
  menuItems: {
    name: string,
    path: string,
  }[],
}

const MenuTop = ({ menuItems }: Props) => {
  return (
    <React.Fragment> 
      <Box sx={{
        height:"64px", 
        display:"flex", 
        justifyContent:"space-evenly",
        alignItems:"center",
      }}>
        {menuItems.map((item, index) => (
          <Link to={item?.path} key={`MenuItem-${index}`}>{item?.name}</Link>
          ))}
      </Box>
      <Divider />
    </React.Fragment>
  )
}
export default MenuTop