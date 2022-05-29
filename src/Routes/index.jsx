import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FAVORITES, HOMEPAGE, MOVIES, PROFILE, WATCHLATER } from "./CONSTANTS";
import { Layout } from "Pages";
import { HomepageLayout } from "Pages/Home";
import { MoviesLayout } from "Pages/Movies";
import { Movies } from "Pages/Movies/Movies";
import { Favorites } from "Pages/Movies/Favorites";
import { WatchLater } from "Pages/Movies/WatchLater";
import { ProfileLayout } from "Pages/Profile"

export const RouterConfig = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={HOMEPAGE} element={<Layout />}>
            <Route index element={<HomepageLayout />} />
            <Route path={MOVIES} element={<MoviesLayout />}>
              <Route index element={<Movies />} />
              <Route path={FAVORITES} element={<Favorites />} />
              <Route path={WATCHLATER} element={<WatchLater />} />
            </Route>
            <Route path={PROFILE} element={<ProfileLayout />} />
            <Route path='*' element={<HomepageLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}