import { Box } from "@mui/system"

import { InputComponent } from 'Components/Forms/input';

import style from './style.module.scss'

export const SearchMovies = ({ 
  search, 
  handleSearchMovie 
}) => {
  return (
    <Box className={style.searchBox}>
      <InputComponent 
        name="movieSearch"
        label="Search..." 
        value={search}
        onChange={(e) => handleSearchMovie(e)}
      />
    </Box>
  )
}