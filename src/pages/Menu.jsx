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
      <>
        <Product />
      </>
    </div>
  );
}

export default Menu;
