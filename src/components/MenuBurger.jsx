import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import menuBurger from '../images/menu_burger.png';
import './styleComponents/MenuBurger.scss';

const Menu = ({ toggled }) => {
  const { x } = useSpring({
    x: toggled ? 0 : 100,
  });

  return (
    <animated.div
      className="nav-wrapper"
      style={{ transform: x.interpolate((y) => `translate3d(${y * -1}%, 0, 0)`) }}
    >
      <nav>
        <Link to="/">Ir a Inicio</Link>
        <Link to="/menu">Menú</Link>
        <Link to="/deliver">Entregar pedidos</Link>
      </nav>
    </animated.div>
  );
};

const MenuBurger = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggledHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <Menu toggled={isToggled} />
      <div className="menu-burger">
        <img src={menuBurger} onClick={toggledHandler} className="button-burger" alt="menu_burger" />
      </div>
    </div>
  );
};

export default MenuBurger;
