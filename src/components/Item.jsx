import React, { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';
import './Item.scss';
import iconMore from '../images/icon_more.png';
import iconLess from '../images/icon_less.png';
// import coffee from '../images/coffee.jpg';
// import latte from '../images/latte.jpg';
// import juice from '../images/juice.jpg';
// import sandwich from '../images/sandwich.jpg';

function Item() {
  // useState
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('menu').orderBy('id', 'asc').onSnapshot((snap) => {
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
          {/* {coffee}
          {latte}
          {juice}
          {sandwich} */}
          <b>{r.Product}</b>
          <br />
          <div>
            <button className="btn-counters  espacito" onClick={() => setCount(count > 0 ? count - 1 : count)}>
              <img src={iconLess} className="icons-more-less" alt="icon_less" />
            </button>
            <b>
              S/.
              {r.Price}
            </b>
            <button className="btn-counters espacio" onClick={() => setCount(count + 1)}>
              <img src={iconMore} className="icons-more-less" alt="icon_more" />
            </button>
            {/* {count} */}
          </div>
        </div>

      ))}
    </>
  );
}

export default Item;
