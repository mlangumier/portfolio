import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "Pages/Home/homepageLayout";
import MoviesLayout from "Pages/Movies/moviesLayout";
import Movies from "Pages/Movies/Movies/movies";
import Favorites from "Pages/Movies/Favorites/favorites";
import WatchLater from "Pages/Movies/WatchLater/watchLater";
import ProfileLayout from "Pages/Profile/profileLayout"
import { FAVORITES, HOMEPAGE, MOVIES, PROFILE, WATCHLATER } from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={HOMEPAGE} element={<HomepageLayout />} />
          <Route path={MOVIES} element={<MoviesLayout />}>
            <Route index element={<Movies />} />
            <Route path={FAVORITES} element={<Favorites />} />
            <Route path={WATCHLATER} element={<WatchLater />} />
          </Route>
          <Route path={PROFILE} element={<ProfileLayout />} />
          <Route path='*' element={<HomepageLayout />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default RouterConfig;