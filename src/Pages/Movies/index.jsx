import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { MenuTop } from "Components/Menu";
import { MenuItemsMovies } from "Components/Menu/menuItems";

import style from './style.module.scss'

export const MoviesLayout = () => {
  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsMovies} />
      <Container 
        maxWidth="xl" 
        component="main" 
        className={style.container}
      >
        <Outlet />
      </Container>
    </React.Fragment>
  )
}
