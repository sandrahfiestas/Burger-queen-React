import React from 'react';
import logo from '../../images/logo.png';
import menu_burger from '../../images/menu_burger.png';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import './Breakfast.scss';

function Breakfast() {
    return (
        <div className="container-breakfast">

            <nav className="nav-toolbar">

                <div className="menu-burger">
                    <img src={menu_burger} className="menu_burger" alt="menu_burger" />
                        {/* <svg class="icon-menu" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg> */}
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
                <button className="breakfast-btn">
                    DESAYUNO
                    </button>
                <button className="lunch-btn">
                    ALMUERZO/CENA
                </button>

            </div>






        </div>
    );

}

export default Breakfast;