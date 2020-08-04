import React from 'react';
import './Deliver.scss';
import DeliverWaiter from '../components/DeliverWaiter';
import NavBarDeliver from '../components/NavBarDeliver';

function Deliver() {
  return (
    <div>
      <NavBarDeliver />
      <DeliverWaiter />
    </div>
  );
}

export default Deliver;
