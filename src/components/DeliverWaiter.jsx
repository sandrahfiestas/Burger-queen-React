import React from 'react';
import './styleComponents/DeliverWaiter.scss';

function DeliverWaiter() {
  return (
    <>
      <div className="container-kitchen">

        <div className="">
          <section className="">
            <div className="row-column">
              <p className="text number-mesa">
                N Mesa:
              </p>
              <p className="text client">
                Cliente:
              </p>
              <p className="text hour-order">
                Hora de pedido:
              </p>
              <p className="text status-order">
                Estado:
              </p>
              <span className="text-menu">Pedido</span>
              <p className="text hour-order-end">
                Hora de termino:
              </p>
              <div className="orders footer">
                <button className="btn-order-ok">Entregado</button>
              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  );
}

export default DeliverWaiter;
