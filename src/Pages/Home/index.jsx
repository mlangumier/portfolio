import React from "react";
import { Introduction } from 'Pages/Home/Introduction'
import { Experiences } from 'Pages/Home/Experiences'
import { Hobbies } from 'Pages/Home/Hobbies'
import { Contact } from 'Pages/Home/Contact'
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