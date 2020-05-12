import React from 'react';

import './App.css';
import logo from './assets/logo.png';
import Routes from './routes';

function App() {

 

  return (
    <div className="container">
      <img src= {logo} height="100px" alt=""/>

      <div className="content">
      <Routes/>

      </div>
    </div>


  );
}

export default App;
