import { Box, Container } from "@mui/material";
import { MenuItemsHomepage } from "Components/Menu/menuItems";
import Navbar from "Components/Navbar/navbar";
import MenuTop from "Components/Menu/menu";
import Introduction from 'Pages/Home/Introduction/introduction'
import Experiences from 'Pages/Home/Experiences/experiences'
import Hobbies from 'Pages/Home/Hobbies/hobbies'
import Contact from 'Pages/Home/Contact/contact'

const Homepage = () => {
  return (
    <Container 
      disableGutters 
      fixed={false} 
      maxWidth={false} 
      sx={{ display: 'flex', width: '100vw', height: '100vh' }}
    >
      <Navbar />
      <Box className="page-full" sx={{ width: '100vw' }}>
        <MenuTop menuItems={MenuItemsHomepage} />
        <Container 
          className="page-content" 
          maxWidth="xl" 
          component="main" 
          sx={{ flexGrow: 1, p: 3, background:'lightgreen', maxHeight: '100vh' }}
        >
          <Introduction />
          <Experiences />
          <Hobbies />
          <Contact />
        </Container>
      </Box>
    </Container>
  )
}

export default Homepage;