import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import iconMenu from '../images/icon_menu.png';
import iconBurger from '../images/icon_burger.png';
import './Home.scss';

function Home() {
  return (
    <div className="home-container">
      <div className="home-logo">
        <img src={logo} className="logo-queen" alt="logo" />
      </div>
      <div className="home-btns">
        <Link to="/breakfast">
          <button className="button">
            <img src={iconMenu} className="icon-home" alt="icon_menu" />
            MENÚ
          </button>
        </Link>
        <Link to="/kitchen">
          <button className="button">
            <img src={iconBurger} className="icon-home" alt="icon_burger" />
            COCINA
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
