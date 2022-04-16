import Navbar from "Components/Navbar/navbar";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuTop from "Components/Menu/menu";
import { MenuItemsMovies } from "Components/Menu/menuItems";

const MoviesLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box className="page-full">
          <MenuTop menuItems={MenuItemsMovies} />
          <Container className="page-content" maxWidth="xl" component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
          </Container>
      </Box>
    </Box>
  )
}

export default MoviesLayout;