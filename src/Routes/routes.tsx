import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "Pages/Home/homepage";
import MoviesLayout from "Pages/Movies/moviesLayout";
import Movies from "Pages/Movies/Movies/movies";
import Favorites from "Pages/Movies/Favorites/favorites";
import WatchLater from "Pages/Movies/WatchLater/watchLater";
import { FAVORITES, HOMEPAGE, MOVIES, WATCHLATER } from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={HOMEPAGE} element={<Homepage />} />
          <Route path={MOVIES} element={<MoviesLayout />}>
            <Route index element={<Movies />} />
            <Route path={FAVORITES} element={<Favorites />} />
            <Route path={WATCHLATER} element={<WatchLater />} />
            {/* <Route path={MOVIEDETAILS} element={<MovieDetails />} /> */}
          </Route>
          <Route path='*' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default RouterConfig;