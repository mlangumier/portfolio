import { Box } from "@mui/material"
import { FC } from "react"
import { NavLink } from "react-router-dom"

type MenuItem = {
  name: string,
  path: string,
}

type MenuItemsList = {
  menuItems: MenuItem[]
}

const MenuTop: FC<MenuItemsList> = ({ menuItems }) => {
  console.log(menuItems)
  return (
    <Box>
      {menuItems.map((item, index) => (
        <NavLink to={item?.path} key={`MenuItem-${index}`}>{item?.name}</NavLink>
      ))}
    </Box>
  )
}
export default MenuTop