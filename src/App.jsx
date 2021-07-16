/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SongList } from './components/songlist';
import './App.scss';
import { SongForm } from './components/songform';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/songs']} exact>
          <SongList />
        </Route>
        <Route path="/songs/:id" exact>
          <SongForm />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);
export default App;
