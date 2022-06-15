import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { MenuTop } from "Components/Menu";
import { MenuItemsLogin } from "Components/Menu/menuItems";
import { CreateUser } from './CreateUser'
import { FindUser } from './FindUser'

import style from './style.module.scss'

export const LoginLayout = () => {
  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsLogin} />
      <Container className={style.container} maxWidth="xl" component="main">
        <Box>
          <Box className={style.content}>
          <Typography 
            component="h2" 
            variant="h5"
            className={style.title}
          >You must be logged in to access our movie library</Typography>
            <CreateUser />
            <Typography 
              component="p" 
              variant="body1"
              className={style.separator}
            >or</Typography>
            <FindUser />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}
