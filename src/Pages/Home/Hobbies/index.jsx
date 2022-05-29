import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material"
import { hobbiesList } from './hobbiesList'

export const Hobbies = () => {
  return (
    <Box>
      <h3>Hobbies</h3>
      <Box style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", gap:"1rem"}}>
        {hobbiesList.map((hobby) => (
          <Box key={hobby?.name} style={{width:'320px', textAlign:"center", border:"1px solid #999"}}>
            <Typography variant="h6" component="h5">{hobby?.name}</Typography>
            <Typography variant="body1" component="p">{hobby?.description}</Typography>
          </Box>
        ))}
      </Box>
      <p>(have only images in a circle, make appear at the center on hover and stay on click) </p>
      <Box>
        <Typography variant="h5" component="h5">What hobbies do we have in common ?</Typography>
        <Box>
          {hobbiesList.map((hobby) => (
            <FormControlLabel
            key={hobby?.name}
            label={hobby?.name}
            control={<Checkbox />}
            /> 
          ))}
        </Box>
      </Box>
      <p>Poll: What hobbies do we have in common ? -&gt; On click, show result of all polls</p>
    </Box>
  )
}