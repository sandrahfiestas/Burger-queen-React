import React, { useState, useEffect } from 'react';
import './styleComponents/Product.scss';
import Summary from './Summary';

function Product() {
  // useState
  // Al renderizar genera un estado (menu)
  // La función (setMenu) actualiza el estado del componente...
  // aceptando un nuevo valor de estado.

  const [data, setData] = useState([0]);
  const [summary, setSummary] = useState([]);
  const [type, setType] = useState('breakfast');

  // useEffect
  // Lee los datos alojados en menuList.json
  useEffect(() => {
    fetch('../menuList.json')
      .then((response) => response.json())
      .then((datos) => {
        setData(datos.Menu);
      });
  }, []);

  const addProducto = (item) => {
    const idProduct = item.id;
    const nameProduct = item.name;
    const priceProduct = parseInt(item.price, 10);
    const countProduct = item.count;

    const findProduct = summary.find((s) => s.idProduct === idProduct);

    if (findProduct == null) {
      summary.push({
        idProduct, nameProduct, priceProduct, countProduct,
      });
    } else {
      findProduct.countProduct += 1;
    }

    setSummary([
      ...summary,
    ]);
  };

  return (
    <>
      <div className="order-btns">
        <button className="btns-menu" onClick={() => setType('breakfast')}>DESAYUNO</button>
        <button className="btns-menu" onClick={() => setType('lunch')}>ALMUERZO/CENA</button>
      </div>
      <div className="container-menu">
        <div className="breakfast-menu">
          {data.filter((item) => item.type === type).map((item) => (
            <div className="breakfast-item" key={item.id}>
              <figure><img className="breakfast-product" src={`${process.env.PUBLIC_URL}/imagesProduct/${item.image}`} alt="imagen" /></figure>
              {item.name}
              <p>
                S./
                {item.price}
              </p>
              <button
                onClick={() => addProducto(item)}
                value={item.price}
                name={item.name}
                id={item.id}
                type="button"
                className="btn-add"
                key={item.id}
              >
                AGREGAR
              </button>
            </div>
          ))}
        </div>
        <Summary summary={summary} />
      </div>
    </>
  );
}
export default Product;
