import MockFirebase from 'mock-cloud-firestore';
import firebase from '../firebase/firebase';
import {
  addOrder,
  getOrder,
  // deleteOrder,
} from '../controller/orders';

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Product from '../components/Product';

// test('renders the correct content', async () => {
//   render(<Product />);
//   const bntAdd = await screen.findByRole('button');

//   expect(bntAdd.textContent).toBe('Agregar');
// });

/*
const fixtureData = {
  __collection__: {
    pedidos: {
      __doc__: {
        Order001: {
          products: '',
          client: 'Cliente Uno',
          numberTable: '1',
          status: 'pending',
          hourSend: '',
          hourEnd: '',
          timeToCook: '',
          // client: 'Cliente Uno',
          // numberTable: '1',
          // status: 'ready',
          // timeToCook: '',
          // hourEnd: '',
          // hourSend: '',
          // products: {
          //   idProduct: 'b1',
          //   nameProduct: 'Café americano',
          //   priceProduct: '5',
          //   countProduct: '1',
        },
      },
    },
  },
};
*/

const listOrder = {
  products: 'Café con leche',
  client: 'Cliente Dos',
  numberTable: '2',
  status: 'pending',
  hourSend: '',
  hourEnd: '',
  timeToCook: '',
};

// const listOrder = {
//   __collection__: {
//     pedidos: {
//       __doc__: {
//         order001: {
//           products: '',
//           client: 'Cliente Dos',
//           numberTable: '',
//           status: 'pending',
//           hourSend: '',
//           hourEnd: '',
//           timeToCook: '',
//         },
//       },
//     },
//   },
// };

beforeEach(() => {
  firebase.mockClear();
});

global.firebase = new MockFirebase(listOrder, { isNaiveSnapshotListenerEnabled: true });

afterEach(() => {
  firebase.mockClear();
});

describe('addOrder', () => {
  it('Deberia de poder agregar una orden', (done) => addOrder(listOrder)
    .then(() => {
      const callback = (order) => { // order => gettingOrder
        const result = order.find((element) => element.client === 'Cliente Dos');
        expect(result.client).toBe('Cliente Dos');
        done();
      };
      getOrder(callback);
      // console.log(callback);
    }));
});

/*
describe('deleteOrder', () => {
  it('Deberia de poder eliminar al Cliente Dos ', (done) => deleteOrder('Cliente Dos')
    .then(() => {
      const callback = (order) => {
        const result = order.find((element) => element.client === 'Cliente Dos');
        expect(result).toBe(undefined);
        done();
      };
      getOrder(callback);
    }));
});
*/
