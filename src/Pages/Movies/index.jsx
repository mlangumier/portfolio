import React from "react";
import { Outlet } from "react-router-dom";
import { MenuTop } from "Components/Menu";
import { MenuItemsMovies } from "Components/Menu/menuItems";
import { Container } from "@mui/material";

export const MoviesLayout = () => {

  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsMovies} />
      <Container className="page-content" maxWidth="xl" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Container>
    </React.Fragment>
  )
}
