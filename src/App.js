import React from 'react';
import logo from './logo.svg';
import './App.css';

import Facebook from './components/Facebook'

function App() {
  return (
    <div className="App">
      <header  className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-tittle"> Facebook OAuth </h1>
      </header>
        <p className= "App-intro">
          To get start, authenticate with Facebook.
        </p>
        <Facebook />
  
      
    </div>
  );
}

export default App;
