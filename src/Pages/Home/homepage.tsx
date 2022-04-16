import Navbar from "Components/Navbar/navbar";
import { Box, Container, Typography } from "@mui/material";

const Homepage = () => {
  //Main menu {minHeight:'64px'}
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Container maxWidth="xl" component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="body1" component="p">
            Menu : highlight section items on scroll
          </Typography>
          <Typography variant="h3" component="h2">
            Home Page Content (banner?)
          </Typography>
          <Typography variant="body1" component="p">
            - Introducing this website (Parallax?), ask for a name/pseudo
          </Typography>
          <Typography variant="body1" component="p">
            - Introducing myself
          </Typography>
          <Typography variant="body1" component="p">
            - Parcours timeline + on click =&gt; modal (zoom out) with details
          </Typography>
          <Typography variant="body1" component="p">
            - Describing my hobbies with images
          </Typography>
          <Typography variant="body1" component="p">
            - Poll about hobbies + graphic results
          </Typography>
          <Typography variant="body1" component="p">
            - Epilogue + contact + socials
          </Typography>
      </Container>
    </Box>
  )
}

export default Homepage;