import React, { useState, useEffect } from 'react';
import './styleComponents/Product.scss';
import Summary from './Summary';

// import info from '../../public/menuList.json';

function Product() {
  // useState
  // Al renderizar genera un estado (menu)
  // La función (setMenu) actualiza el estado del componente...
  // aceptando un nuevo valor de estado.

  // const data = info.Menu;
  // const [type, setType] = useState('breakfast');

  const [menu, setMenu] = useState([0]);
  const [summary, setSummary] = useState([]);

  // useEffect
  // Lee los datos alojados en menuList.json
  useEffect(() => {
    fetch('../menuList.json')
      .then((response) => response.json())
      .then((datos) => {
        setMenu(datos.Menu);
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
      <div className="breakfast-menu">
        {menu.map((Menu) => (
          <div className="breakfast-item" key={Menu.id}>
            <figure><img className="breakfast-product" src={`${process.env.PUBLIC_URL}/imagesProduct/${Menu.image}`} alt="imagen" /></figure>
            {Menu.name}
            <p>
              S./
              {Menu.price}
            </p>
            <button
              onClick={() => addProducto(Menu)}
              value={Menu.price}
              name={Menu.name}
              id={Menu.id}
              type="button"
              className="btn-add"
              key={Menu.id}
            >
              AGREGAR
            </button>
          </div>
        ))}
      </div>

      <>
        <Summary summary={summary} />
      </>

    </>
  );
}
export default Product;
