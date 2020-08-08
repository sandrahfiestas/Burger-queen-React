import React from 'react';
import './styleComponents/OrdersChef.scss';
import moment from 'moment';
import 'moment/locale/es';
import firebase from '../firebase/firebase';

function OrdersChef() {
  const [orders, getOrders] = React.useState([]);

  React.useEffect(() => {
    const confirmedOrders = firebase.firestore().collection('pedidos');
    confirmedOrders
      .orderBy('hourSend', 'desc')
      .onSnapshot({ includeMetadataChanges: true }, ((snap) => {
        const gettingOrders = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        getOrders(gettingOrders);
      }));
  }, []);

  const completeOrder = (orderId) => {
    firebase.firestore().collection('pedidos').doc(orderId).update({
      status: 'ready',
      hourEnd: new Date().getTime(),
      timeToCook: new Date().getTime() - orders.find((o) => o.id === orderId).hourSend,
    });
  };

  const deleteOrder = (orderId) => {
    firebase.firestore().collection('pedidos').doc(orderId).delete();
  };

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
                    <th>PEDIDO</th>
                    <th>HORA TERMINO</th>
                    <th>TIEMPO PREPARACION</th>
                    <th>ESTADO</th>
                    <th>LIMPIAR</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={i}>
                      <td>{order.numberTable}</td>
                      <td>{order.client}</td>
                      <td>{moment(order.hourSend).format('LT')}</td>
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
                      <td>{order.hourEnd != null ? moment(order.hourEnd).format('LT') : ''}</td>
                      <td>{order.timeToCook !== '' ? moment(order.timeToCook).format('LT') : ''}</td>
                      <td>{order.status === 'pending' ? <button onClick={() => completeOrder(order.id)}>Listo</button> : ''}</td>
                      <td>{order.status === 'pending' ? <button onClick={() => deleteOrder(order.id)}>Cancelar</button> : ''}</td>
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

export default OrdersChef;
