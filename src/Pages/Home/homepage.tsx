import { Box, Container, Typography } from "@mui/material";
import { MenuItemsHomepage } from "Components/Menu/menuItems";
import Navbar from "Components/Navbar/navbar";
import MenuTop from "Components/Menu/menu";
import Introduction from 'Pages/Home/Introduction/introduction'
import Experiences from 'Pages/Home/Experiences/experiences'
import Hobbies from 'Pages/Home/Hobbies/hobbies'
import Contact from 'Pages/Home/Contact/contact'

const Homepage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box className="page-full">
        <MenuTop menuItems={MenuItemsHomepage} />
        {/* Make container Fluid (~75wv) */}
        <Container className="page-content" maxWidth="xl" component="main" sx={{ flexGrow: 1, p: 3 }} style={{background:'lightgreen'}}>
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