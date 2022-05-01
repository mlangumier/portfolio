import React from "react";
import { Introduction } from 'Pages/Home/Introduction/introduction'
import { Experiences } from 'Pages/Home/Experiences/experiences'
import { Hobbies } from 'Pages/Home/Hobbies/hobbies'
import { Contact } from 'Pages/Home/Contact/contact'
import { Container } from "@mui/material";

export const HomepageLayout = () => {
  return (
    <React.Fragment>
      <Container className="page-content" maxWidth="xl" component="main" sx={{ p: 3 }}>
        <Introduction />
        <Experiences />
        <Hobbies />
        <Contact />
      </Container>
    </React.Fragment>
  )
}



/* TODO

- Blocks content
- Barre défilement droite (sections)
- Couleurs floues en fond de chaque section
- Parallax

*/