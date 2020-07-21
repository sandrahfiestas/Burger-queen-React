import React from 'react';
import './Breakfast.scss';
import logo from '../../images/logo.png';
import menu_burger from '../../images/menu_burger.png';
import coffee from '../../images/coffee.jpg';
import latte from '../../images/latte.jpg';
import juice from '../../images/juice.jpg';
import sandwich from '../../images/sandwich.jpg';
import icon_more from '../../images/icon_more.png';
import icon_less from '../../images/icon_less.png';

function Breakfast() {
  return (

    <div>
      <nav className="nav-toolbar">

        <div className="menu-burger">
          <img src={menu_burger} className="menu_burger" alt="menu_burger" />
        </div>

        <div className="logo">
          <img src={logo} className="logo" alt="logo" />
        </div>

        <div className="nav-order">
          <h1>ORDEN DE PEDIDO</h1>
          {/* <ul>
            <li><a href="#" target="_blank">Inicio</a></li>
            <li><a href="#">Pedido</a></li>
            <li><a href="#">Entregas</a></li>
        </ul> */}
        </div>

        <div className="nav-time">
          <h2>10:32 am</h2>
        </div>

      </nav>
      <div className="order-btns">
        <button className="breakfast-btns-menu">
          DESAYUNO
        </button>
        <button className="breakfast-btns-menu">
          ALMUERZO/CENA
        </button>
      </div>

      <div className="container-breakfast">
        <div className="breakfast-menu">
          <div className="breakfast-item">

            <img src={coffee} className="breakfast-product" alt="coffee" />
            <p>Café americano</p>
            <div>
              <img src={icon_less} className="icons-more-less" alt="icon_less" />
              S/5.00
              {/* <img src={icon_more} className="icons-more-less" alt="icon_more" /> */}
              <button><img src={icon_more} className="icons-more-less" alt="icon_more" /></button>
            </div>
          </div>
          <div className="breakfast-item">
            <img src={latte} className="breakfast-product" alt="latte" />
            <p>Café Café con leche</p>
            <div>
              <img src={icon_less} className="icons-more-less" alt="icon_less" />
              S/7.00
              <img src={icon_more} className="icons-more-less" alt="icon_more" />
            </div>
          </div>
          <div className="breakfast-item">
            <img src={juice} className="breakfast-product" alt="juice" />
            <p>Sandwich de</p>
            <p>jamón y queso</p>
            <div>
              <img src={icon_less} className="icons-more-less" alt="icon_less" />
              S/10.00
              <img src={icon_more} className="icons-more-less" alt="icon_more" />
            </div>
          </div>
          <div className="breakfast-item">
            <img src={sandwich} className="breakfast-product" alt="sandwich" />
            <p>Jugo de frutas</p>
            <p>natural</p>
            <div>
              <img src={icon_less} className="icons-more-less" alt="icon_less" />
              S/7.00
              <img src={icon_more} className="icons-more-less" alt="icon_more" />
            </div>
          </div>
        </div>
        <div className="breakfast-ticket-btn">
          <div className="breakfast-ticket">
            <div className="item-client">
              <p>Ciente:</p>
            </div>
            <div className="item-time">
              <p>Hora de atención:</p>
              <p>Número de Mesa:</p>
            </div>
            <div className="item-product">
              <p>PRODUCTO</p>
            </div>
            <div className="item-unit">
              <p>UNID.</p>
            </div>
            <div className="item-price">
              <p>PRECIO</p>
            </div>
            <div className="item-total">
              <p>TOTAL DE PEDIDO</p>
            </div>
            <div className="item-total-price">
              <p>S/.</p>
            </div>
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
