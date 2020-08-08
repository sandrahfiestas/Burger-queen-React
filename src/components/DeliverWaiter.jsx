import React, { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';

function DeliverWaiter() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('pedidos').orderBy('hourSend', 'asc').onSnapshot((snap) => {
      const array = [];
      snap.forEach((doc) => {
        array.push(doc.data());
      });
      setproduct(array);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <div className="container-kitchen">
        <div className="">
          <section className="">
            <div className="row-column">
              <table>
                <thead>
                  <tr>
                    <th>N° MESA</th>
                    <th>CLIENTE</th>
                    <th>HORA PEDIDO</th>
                    <th>ESTADO</th>
                    <th>PEDIDO</th>
                    <th>HORA TERMINO</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {
                    product.map((item) => (
                      <tr key={item.numMesa}>
                        <th>{item.numMesa}</th>
                        <th>{item.client}</th>
                        <th>{item.hourSend}</th>
                        <th>{item.status}</th>
                        <th><span>ORDEN</span></th>
                        {/* <th>{item.order}</th> */}
                        <th>{item.hourSend}</th>
                        <th />
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </section>
        </div>

      </div>
    </>
  );
}

export default DeliverWaiter;
