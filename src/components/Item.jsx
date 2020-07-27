import React, { useState, useEffect } from 'react';
import './Item.scss';

function Item() {
  // useState
  // Al renderizar genera un estado (menu)
  // La función (setMenu) actualiza el estado del componente...
  // aceptando un nuevo valor de estado.
  const [menu, setMenu] = useState([0]);

  // useEffect
  // Lee los datos alojados en menuList.json
  useEffect(() => {
    fetch('../menuList.json')
      .then((response) => response.json())
      .then((datos) => {
        setMenu(datos);
      });
  }, []);

  return (
    <>
      {menu.map((product) => (
        <div className="breakfast-item" key={product.id}>
          <figure><img className="breakfast-product" src={`${process.env.PUBLIC_URL}/imagesProduct/${product.image}`} alt="imagen" /></figure>
          {product.name}
          <p>
            S./
            {product.price}
          </p>
          <button className="btn-add">AGREGAR</button>
        </div>
      ))}
    </>
  );
}

export default Item;
