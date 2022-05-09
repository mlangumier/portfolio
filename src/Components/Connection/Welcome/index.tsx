import React from "react"
import { Typography } from "@mui/material"


export const Welcome = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" component="p">Welcome, {'username'}!</Typography>
      <Typography variant="body2" component="p">* Remember that you can modify you username or create a new one at any time by visiting your Profile</Typography>

    </React.Fragment>
  )
}