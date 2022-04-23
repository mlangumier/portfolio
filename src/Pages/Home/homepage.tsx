import { Box, Container } from "@mui/material";
import { MenuItemsHomepage } from "Components/Menu/menuItems";
import Navbar from "Components/Navbar/navbar";
import MenuTop from "Components/Menu/menu";
import Introduction from 'Pages/Home/Introduction/introduction'
import Experiences from 'Pages/Home/Experiences/experiences'
import Hobbies from 'Pages/Home/Hobbies/hobbies'
import Contact from 'Pages/Home/Contact/contact'
import { useEffect, useState } from "react";

const Homepage = () => {
  const [ open, setOpen ] = useState<boolean>(false);
  const [ navbarwidth, setNavbarWidth ] = useState<number>(65);
  
  useEffect(() => {
    open ? setNavbarWidth(180) : setNavbarWidth(65);
  }, [open])

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open={open} setOpen={setOpen} />
      <Box className="page-full" style={{ width: `calc(100% - ${navbarwidth}px)`, flexGrow: 1 }}>
        <MenuTop menuItems={MenuItemsHomepage} navbarwidth={navbarwidth} />
        <Container className="page-content" maxWidth="xl" component="main" sx={{ p: 3 }} style={{background:'lightgreen'}}>
          <Introduction />
          <Experiences />
          <Hobbies />
          <Contact />
        </Container>
      </Box>
    </Box>
  )
}

export default Homepage;