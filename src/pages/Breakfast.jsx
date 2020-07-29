import React, { useState, useEffect } from 'react';
import './Breakfast.scss';
import logo from '../images/logo.png';
import menuBurger from '../images/menu_burger.png';
import Item from '../components/Item';
import iconMore from '../images/icon_more.png';
import iconLess from '../images/icon_less.png';
import remove from '../images/remove.png';

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
          <Item />
        </div>

        <div className="breakfast-ticket-btn">
          <div className="breakfast-ticket">
            <div className="ticket-header">
              <div className="ticket-client">
                <p>
                  Ciente :
                  <input type="text" placeholder="Nombre de cliente" className="validaty input-client" pattern="([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,30}\\s*)+" />
                </p>
              </div>
              <div className="ticket-time">
                <p>
                  Hora de atención:
                  {clock}
                </p>
                <p>
                  Número de Mesa :
                  <input type="text" placeholder="N° mesa" className="validaty input-table" pattern="" />
                </p>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col">Cant.</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Total</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col"><img src={iconMore} alt="" /></th>
                  <th scope="col"><img src={iconLess} alt="" /></th>
                  <th scope="col">10</th>
                  <th scope="col">Sandwich de jamón y queso</th>
                  <th scope="col">10</th>
                  <th scope="col">100</th>
                  <th scope="col"><img src={remove} alt="" /></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="breakfast-btns">
            <button className="btn-accept">CONFIRMAR</button>
            <button className="btn-cancel">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breakfast;
