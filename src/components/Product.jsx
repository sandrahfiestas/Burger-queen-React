import React, { useState, useEffect } from 'react';
import './styleComponents/Product.scss';

function Product() {
  const [menu, setMenu] = useState([0]);

  useEffect(() => {
    fetch('../menuList.json')
      .then((response) => response.json())
      .then((datos) => {
        setMenu(datos.Breakfast);
      });
  }, []);

  return (
    <>
      {menu.map((Menu) => (
        <div className="breakfast-item" key={Menu.id} id={Menu.id}>
          <figure><img className="breakfast-product" src={`${process.env.PUBLIC_URL}/imagesProduct/${Menu.image}`} alt="imagen" /></figure>
          {Menu.name}
          <p>
            S./
            {Menu.price}
          </p>

          <button className="btn-add">Agregar</button>
        </div>
      ))}
    </>
  );
}
export default Product;
