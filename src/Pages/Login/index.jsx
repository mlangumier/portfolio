import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

import { MenuTop } from "Components/Menu";
import { MenuItemsLogin } from "Components/Menu/menuItems";


export const LoginLayout = () => {
  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsLogin} />
      <Container className="page-content" maxWidth="xl" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box>
          Create a user / Login
        </Box>
      </Container>
    </React.Fragment>
  )
}
