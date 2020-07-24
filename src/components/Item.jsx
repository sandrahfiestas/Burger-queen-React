import React, { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';
import './styleComponents/Item.scss';
import iconMore from '../images/icon_more.png';
import iconLess from '../images/icon_less.png';

function Item() {
  // useState
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('menu').onSnapshot((snap) => {
      const array = [];
      snap.forEach((doc) => {
        array.push(doc.data());
      });
      setProduct(array);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {product.map((r) => (
        <div className="breakfast-item" key={r.id}>
          <figure><img className="breakfast-product" src={r.Link} alt="imagen" /></figure>
          {r.Product}
          <br />
          {r.Price}

          <div>
            <button onClick={() => setCount(count - 1)}>
              <img src={iconLess} className="icons-more-less" alt="icon_less" />
            </button>

            <button onClick={() => setCount(count + 1)}>
              <img src={iconMore} className="icons-more-less" alt="icon_more" />
            </button>
            {count}
          </div>

        </div>
      ))}
    </>
  );
}

export default Item;
