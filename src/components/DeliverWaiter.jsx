import React from 'react';
import firebase from '../firebase/firebase';
import './styleComponents/DeliverWaiter.scss';

function DeliverWaiter() {
  const [orders, getOrders] = React.useState([]);

  React.useEffect(() => {
    const confirmedOrders = firebase.firestore().collection('pedidos');
    confirmedOrders
      .where('status', '==', 'ready')
      .onSnapshot({ includeMetadataChanges: true }, ((snap) => {
        const gettingOrders = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        getOrders(gettingOrders);
      }));
  }, []);

  return (
    <>
      <div className="">

        <div className="">
          <section className="">
            <div className="row-column">
              <table>
                <thead>
                  <tr>
                    <th>N° MESA</th>
                    <th>CLIENTE</th>
                    <th>PEDIDO</th>
                    <th>ESTADO</th>
                    <th>ENTREGADO</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={i}>
                      <td>{order.numberTable}</td>
                      <td>{order.client}</td>
                      <td>
                        <ul>
                          {order.products.map((product, j) => (
                            <li key={j}>
                              {product.countProduct}
                              {product.nameProduct}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
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
