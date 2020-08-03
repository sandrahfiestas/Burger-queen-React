import React from 'react';
import './Menu.scss';
import Product from '../components/Product';
import NavBarWaiter from '../components/NavBarWaiter';

function Menu() {
  return (

    <div>
      <nav className="nav-toolbar">
        <NavBarWaiter />
      </nav>

      <div className="order-btns">
        <button className="btns-menu">DESAYUNO</button>
        <button className="btns-menu">ALMUERZO/CENA</button>
      </div>

      <div className="container-menu">
        <Product />
      </div>
    </div>
  );
}

export default Menu;
