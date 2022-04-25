import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import randomNumber from 'Functions/randomNumber'

const CreateUser = () => {
  const [ userName, setUsername ] = useState<string>("")

  useEffect(() => {
    setUsername(`Mathieu#${randomNumber(1000, 9999)}`)
  }, [])

  return (
  <Box>
    <Typography variant="h5" component="h5">
      Before I tell you about myself, let me know your name: 
    </Typography>
    <Box component="span">
      <input type="text" placeholder={userName} />
    </Box>
    <Typography variant="h6" component="p">Why do i need to know your name?</Typography>
    <Typography variant="body1" component="p">
      Before we begin, let me tell you what this website is about
    </Typography>
    <Typography variant="body1" component="p">
      The projects you are going to see on this website keep the data in a database. In order to personalize your visit, I could use your name, or I can create one for you.
    </Typography>
    <Typography variant="body2" component="p">
      Keep in mind, I will not get any of your personal data.
    </Typography>
  </Box>
  )
}

export default CreateUser;