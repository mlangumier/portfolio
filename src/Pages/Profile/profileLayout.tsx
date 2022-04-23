import { useEffect, useState } from "react";
import { MenuItemsProfile } from "Components/Menu/menuItems";
import Navbar from "Components/Navbar/navbar";
import MenuTop from "Components/Menu/menu";
import { Box, Container } from "@mui/material";

const ProfileLayout = () => {
  const [ open, setOpen ] = useState<boolean>(false);
  const [ navbarwidth, setNavbarWidth ] = useState<number>(65);
  
  useEffect(() => {
    open ? setNavbarWidth(180) : setNavbarWidth(65);
  }, [open])

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open={open} setOpen={setOpen} />
      <Box className="page-full" style={{ width: `calc(100% - ${navbarwidth}px)`, flexGrow: 1 }}>
        <MenuTop menuItems={MenuItemsProfile} />
        <Container className="page-content" maxWidth="xl" component="main" sx={{ p: 3 }}>
          <div>User Profile Page</div>
        </Container>
      </Box>
    </Box>
  )
}

export default ProfileLayout;