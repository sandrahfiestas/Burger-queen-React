import React from 'react';
import './Breakfast.scss';
import logo from '../images/logo.png';
import menuBurger from '../images/menu_burger.png';
import Product from '../components/Product';
import Ticket from '../components/Ticket';
import Clock from '../components/Clock';

function Breakfast() {
  return (

    <div>
      <nav className="nav-toolbar">
        <div className="menu-burger">
          <img src={menuBurger} className="menu_burger" alt="menu_burger" />
        </div>

        <div className="logo">
          <img src={logo} className="logo" alt="logo" />
        </div>

        <div className="nav-order">
          <h1>ORDEN DE PEDIDO</h1>
        </div>

        <div className="nav-time">
          <h2><Clock /></h2>
        </div>
      </nav>

      <div className="order-btns">
        <button className="breakfast-btns-menu">DESAYUNO</button>
        <button className="breakfast-btns-menu">ALMUERZO/CENA</button>
      </div>

      <div className="container-breakfast">
        <div className="breakfast-menu">
          <Product />
        </div>
        <Ticket />
      </div>
    </div>
  );
}

export default Breakfast;
