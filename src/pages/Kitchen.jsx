import React from 'react';
import './Kitchen.scss';
import NavBarChef from '../components/NavBarChef';
import OrdersChef from '../components/OrdersChef';

function Kitchen() {
  return (
    <div>
      <NavBarChef />
      <OrdersChef />
    </div>
  );
}

export default Kitchen;
