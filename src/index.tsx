import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Home";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Album from "./Album";
import Search from "./Search";
// @ts-ignore
// @ts-ignore

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route component={Home} path="/" exact />
              <Route component={Album} path="/playlists/*" />
              <Route component={Search} path="/input" />
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



