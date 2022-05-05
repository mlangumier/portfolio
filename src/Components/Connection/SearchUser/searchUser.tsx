import { Box, Button, TextField, Typography } from "@mui/material"


export const SearchUser = (
  // props: handleStepProp
  ) => {
  // const { handleStep } = props
  return (
    <Box sx={{flex:1}}>
      {/* <Button variant="outlined" onClick={() => handleStep(20)}>I want to create a new username</Button> */}
      <Typography variant="h5" component="p">Find your username</Typography>
      <Box>
        <TextField id="standard-basic" label="Mathieu#1234" variant="standard" />
        {/* <Button variant="outlined"  onClick={() => handleStep(11)}>Confirm</Button> */}
      </Box>
    </Box>
  )
}