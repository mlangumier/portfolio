import React from "react";
import { MenuItemsProfile } from "Components/Menu/menuItems";
import { MenuTop } from "Components/Menu/menu";
import { Container } from "@mui/material";
import { CreateUser } from "Components/CreateUser/createUser";

export const ProfileLayout = () => {
  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsProfile} />
      <Container className="page-content" maxWidth="xl" component="main" sx={{ p: 3 }}>
        <div>User Profile Page</div>
        <CreateUser />
      </Container>
    </React.Fragment>
  )
}