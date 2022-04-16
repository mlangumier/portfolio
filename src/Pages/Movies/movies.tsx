import Navbar from "Components/Navbar/navbar";
import { Box } from "@mui/material";

const Movies = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Movies</h1>
          <p>Page Content</p>
      </Box>
    </Box>
  )
}

export default Movies;