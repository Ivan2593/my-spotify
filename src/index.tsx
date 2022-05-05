import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Home";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Album from "./Album";

// @ts-ignore
// @ts-ignore
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route component={Home} path="/" exact />
              <Route component={Album} path="/album" />
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


