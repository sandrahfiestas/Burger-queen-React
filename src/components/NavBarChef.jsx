import React from 'react';
import './styleComponents/NavBarChef.scss';
import Clock from './Clock';
import logo from '../images/logo.png';
import menuBurger from '../images/menu_burger.png';

function NavBarChef() {
  return (
    <>
      <nav className="nav-toolbar">
        <div className="menu-burger">
          <img src={menuBurger} className="menu_burger" alt="menu_burger" />
        </div>

        <div className="logo">
          <img src={logo} className="logo" alt="logo" />
        </div>

        <div className="nav-order">
          <h1>COCINA</h1>
        </div>

        <div className="nav-time">
          <h2><Clock /></h2>
        </div>
      </nav>

    </>
  );
}

export default NavBarChef;