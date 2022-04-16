import Navbar from "Components/Navbar/navbar";
import { Box, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
          <p>Page Content</p>
      </Box>
    </Box>
  )
}

export default Homepage;