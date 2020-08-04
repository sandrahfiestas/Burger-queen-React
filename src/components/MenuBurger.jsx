import React from 'react';
import './styleComponents/MenuBurger.scss';
import menuBurger from '../images/menu_burger.png';

function MenuBurger() {
  return (
    <div className="menu-burger">
      <img src={menuBurger} className="menu_burger" alt="menu_burger" />
    </div>
  );
}

export default MenuBurger;
