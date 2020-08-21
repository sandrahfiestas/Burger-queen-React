/* eslint-disable no-console */
import firebase from '../firebase/firebase';

const addOrder = (newOrder) => firebase.firestore().collection('pedidos').add(newOrder);

const getOrder = (callback) => firebase.firestore().collection('pedidos')
  .orderBy('hourSend', 'desc')
  .onSnapshot({ includeMetadataChanges: true }, ((snap) => {
    const gettingOrders = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(gettingOrders);
  }));

const deleteOrder = (id) => firebase.firestore().collection('pedidos').doc(id).delete();

// const deleteOrder = async (id) => {
//   try {
//     await firebase.firestore().collection('pedidos').doc(id).delete();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default deleteOrder;

export { addOrder, getOrder, deleteOrder };
