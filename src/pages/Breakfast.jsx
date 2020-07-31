import React, { useState, useEffect } from 'react';
import './Breakfast.scss';
import Product from '../components/Product';
import Summary from '../components/Summary';
import logo from '../images/logo.png';
import menuBurger from '../images/menu_burger.png';

function Breakfast() {
  const [clock, setClock] = useState(new Date().toLocaleString([], { hour: '2-digit', hour12: true, minute: '2-digit' }));
  useEffect(() => {
    // setInterval -> ejetuta una función en intervalos
    const interval = setInterval(() => {
      // toLocaleString([locale [, options]]);
      setClock(new Date().toLocaleString([], { hour: '2-digit', hour12: true, minute: '2-digit' }));
    }, 1000);
    // clearInterval -> borra intervalos
    return () => clearInterval(interval);
  }, []);

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
          <h2>10:32 am</h2>
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

        <div className="breakfast-ticket-btn">
          <div className="breakfast-ticket">
           {/* <Summary /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breakfast;
