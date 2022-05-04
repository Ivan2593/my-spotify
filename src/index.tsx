import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Home";
import Album from "./Album";

// @ts-ignore
// @ts-ignore
ReactDOM.render(
  <React.StrictMode>
      <Home/>
      {/*<Album/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

