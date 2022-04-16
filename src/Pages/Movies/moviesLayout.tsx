import Navbar from "Components/Navbar/navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuTop from "Components/Menu/menu";
import { MenuItemsMovies } from "Components/Menu/menuItems";

const MoviesLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MenuTop menuItems={MenuItemsMovies} />
          {/* <h3>Menu items</h3> */}
          <Outlet />
      </Box>
    </Box>
  )
}

export default MoviesLayout;