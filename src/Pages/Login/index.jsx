import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { MenuTop } from "Components/Menu";
import { MenuItemsLogin } from "Components/Menu/menuItems";
import { CreateUser } from './CreateUser'
import { FindUser } from './FindUser'

export const LoginLayout = () => {
  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsLogin} />
      <Container className="page-content" maxWidth="xl" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box style={{height:'100%'}}>
          <Typography component="h2" variant="h3">You must be logged in to access our movie library</Typography>
          <Box>
            <CreateUser />
            <Typography component="p" variant="body1">----- or -----</Typography>
            <FindUser />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}
