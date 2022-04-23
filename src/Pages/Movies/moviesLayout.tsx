import Navbar from "Components/Navbar/navbar";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuTop from "Components/Menu/menu";
import { MenuItemsMovies } from "Components/Menu/menuItems";
import { useEffect, useState } from "react";

const MoviesLayout = () => {
  const [ open, setOpen ] = useState<boolean>(false);
  const [ navbarwidth, setNavbarWidth ] = useState<number>(65);
  
  useEffect(() => {
    open ? setNavbarWidth(180) : setNavbarWidth(65);
  }, [open])

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open={open} setOpen={setOpen} />
      <Box className="page-full" style={{ width: `calc(100% - ${navbarwidth}px)`, flexGrow: 1 }}>
          <MenuTop menuItems={MenuItemsMovies} navbarwidth={navbarwidth} />
          <Container className="page-content" maxWidth="xl" component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
          </Container>
      </Box>
    </Box>
  )
}

export default MoviesLayout;