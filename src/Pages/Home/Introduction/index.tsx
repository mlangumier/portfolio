import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useEffect, useState } from "react";

const interests = [
  "Dungeon Master", 
  "Archer", 
  "Book reader", 
  "Husky lover",
  "Hiker",
  "Hobbit",
  "History Nerd",
]


export const Introduction = () => {
  const [ word, setWord ] = useState<string>(interests[0])
  
  useEffect(() => {
    let counter:number = 0
    const timer = setInterval(() => {
      if (counter === interests.length) counter = 0
      counter++
      setWord(interests[counter])
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Box>
      <Box>
        <Typography variant="h4" component="h3">Learn. Share. Evolve.</Typography>
        <Typography variant="h3" component="h2">
          Life is always exciting <br />
          when there is so much to <Typography variant="h3" component="span">learn</Typography>
        </Typography>
        <Typography variant="h5" component="h5">
          Web Developer & {word}
        </Typography>
      </Box>
    </Box>
  )
}