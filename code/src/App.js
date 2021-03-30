import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetails'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <MovieList />
          </Route>
          <Route path='/movies/:movieId' exact>
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
