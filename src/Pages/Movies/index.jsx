import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { MenuTop } from "Components/Menu";
import { MenuItemsMovies } from "Components/Menu/menuItems";
import { Container } from "@mui/material";
import axios from "axios"

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
  // url: 'https://online-movie-database.p.rapidapi.com/actors/get-all-filmography',
  // url: 'https://online-movie-database.p.rapidapi.com/title/find',
  params: {q: 'the lord of the rings'},
  headers: {
    'X-RapidAPI-Key': '0d777a3ea8mshb07a7a00e9b9e4bp128f6ejsn99de37b4ab5f',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

//https://rapidapi.com/apidojo/api/online-movie-database/
// title / actors

export const MoviesLayout = () => {

  // useEffect(() => {
  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, [])

  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsMovies} />
      <Container className="page-content" maxWidth="xl" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Container>
    </React.Fragment>
  )
}
