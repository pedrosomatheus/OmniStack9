import React from 'react';

import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="container">
      <img src= {logo} height="100px" alt=""/>

      <div className="content">
      
        <p>Ofereça <strong>spots</strong> para programadores  e encontre <strong>talentos </strong>
          para suas empresas</p>
    
       <form>
        <label htmlFor="email">E-mail *</label>
        <input type="email" id="email" placeholder="Seu melhor email"/>

        <button className="btn" type="submit">Entrar</button>

       </form>

      </div>
    </div>


  );
}

export default App;
