import { Box } from "@mui/system"

import { InputComponent } from 'Components/Forms/input';

export const SearchMovies = ({ searchMovies }) => {
  return (
    <Box>
      <InputComponent 
        name="movieSearch"
        label="Search..." 
        value={""}
        onChange={searchMovies}
      />
    </Box>
  )
}