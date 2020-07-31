import React, { useState, useEffect } from 'react';
// import MenuOrder from '../components/MenuOrder';
import './styleComponents/Product.scss';
// import Summary from './Summary';

function Product() {
  // useState
  // Al renderizar genera un estado (menu)
  // La función (setMenu) actualiza el estado del componente...
  // aceptando un nuevo valor de estado.

  const [menu, setMenu] = useState([0]);
  const [summary, setSummary] = useState([]);

  // useEffect
  // Lee los datos alojados en menuList.json
  useEffect(() => {
    fetch('../menuList.json')
      .then((response) => response.json())
      .then((datos) => {
        setMenu(datos);
      });
  }, []);

  const addProducto = (item) => {
    const idProduct = item.id;
    const nameProduct = item.name;
    const priceProduct = parseInt(item.price);
    const countProduct = item.count;

    summary.push({
      idProduct, nameProduct, priceProduct, countProduct,
    });
    setSummary([
      ...summary,
    ]);

    // console.log(summary);
  };

  return (
    <>
      {menu.map((Menu, i) => (
        <div className="breakfast-item" key={Menu.id}>
          <figure><img className="breakfast-product" src={`${process.env.PUBLIC_URL}/imagesProduct/${Menu.image}`} alt="imagen" /></figure>
          {Menu.name}
          <p>
            S./
            {Menu.price}
            {Menu.count}
          </p>
          <button
            onClick={() => addProducto(Menu)}
            value={Menu.price}
            name={Menu.name}
            id={Menu.id}
            type="button"
            className="btn-add"
            key={i}
          >
            AGREGAR
          </button>
        </div>
      ))}
    </>
    <div>
        <Summary  summary={summary} limpiarPedido={limpiarPedido} />
    </div>    
  );
}
export default Product;
