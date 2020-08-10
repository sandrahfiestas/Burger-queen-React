import firebase from '../firebase/firebase';

const addOrder = async (newOrder) => {
  try {
    await firebase.firestore().collection('pedidos').add(newOrder);
  } catch (error) {
    console.log(error);
  }
};

export default addOrder;
