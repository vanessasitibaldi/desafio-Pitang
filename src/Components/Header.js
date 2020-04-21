import React from 'react';
import '../assets/styles/global.css';
import '../assets/styles/styles.css';
import logo from '../assets/images/logo.jpg';


function Header() {

  return (
      <header className="header">
        <div className="header-container">
          <figure className="logo">
            <img src={logo} alt="gitHub search"/>
          </figure>
          <div className="lasted-seach">
            <a href="/historico">Historico de Busca</a>
          </div>
          <div className="ranking-search">
            <a href="/ranking">Ranking Repos</a> 
          </div>
        </div>
      </header>
 );
}

export default Header;