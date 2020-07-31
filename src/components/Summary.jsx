import React from 'react';
// import firebase from '../firebase/firebase';
import './styleComponents/Summary.scss';
import iconMore from '../images/icon_more.png';
import iconLess from '../images/icon_less.png';
import iconDelete from '../images/icon_delete.png';

const Summary = (props) => {
  const [name, setName] = React.useState('');
  const [table, setTable] = React.useState('');
  // Devuelve un valor con estado y la funcion para actualizarlo
  const [, setResult] = React.useState(props.summary);

  const nameClient = (e) => {
    setName(e.target.value);
  };

  const numberTable = (e) => {
    setTable(e.target.value);
  };

  const increase = (item) => {
    const array = props.summary;
    const itemSelected = array.find((element) => element.idProduct === item.idProduct);

    itemSelected.countProduct += 1;
    setResult({ ...array, countProduct: itemSelected.countProduct });
  };

  // Metodo find, devuelve el valor del primer elemento del array que cumple la función dada
  const decrease = (item) => {
    const array = props.summary;
    const itemSelected = array.find((element) => element.idProduct === item.idProduct);

    if (itemSelected.countProduct > 1) {
      itemSelected.countProduct -= 1;
    }
    setResult({ ...array, countProduct: itemSelected.countProduct });
  };

  const deleteItem = (e) => {
    const position = e.target.id;
    const array = props.summary.splice(position, 1);
    setResult(...array);
  };

  return (

    <div className="ticket-header">
      <div className="ticket-client">
        <p>
          Ciente :
          <input type="text" onChange={nameClient} placeholder="Nombre de cliente" value={name} className="validaty input-client" pattern="([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,30}\\s*)+" />
        </p>
      </div>
      <div className="ticket-time">
        <p>
          Hora de atención:
          {/* {clock} */}
        </p>
        <p>
          Número de Mesa :
          <input type="text" onChange={numberTable} placeholder="N° mesa" value={table} className="validaty input-table" pattern="" />
        </p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col" />
              <th scope="col">Cant.</th>
              <th scope="col">Producto</th>
              <th scope="col">P/U</th>
              <th scope="col">Total</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              props.summary.map((item, i) => (
                <tr key={i} id={item.idProduct}>
                  <th scope="col"><img src={iconMore} onClick={(e) => increase(item)} alt="" /></th>
                  <th scope="col"><img src={iconLess} onClick={(e) => decrease(item)} alt="" /></th>
                  <th scope="col"><p className="">{item.countProduct}</p></th>
                  <th scope="col">{item.nameProduct}</th>
                  <th scope="col">
                    S/
                    {item.priceProduct}
                  </th>
                  <th scope="col">
                    S/
                    {item.priceProduct * item.countProduct}
                  </th>
                  <th scope="col"><img src={iconDelete} id={i} onlclick={deleteItem} alt="" /></th>
                </tr>
              ))
             }
            <tr>
              <th colSpan={7}>
                <p>
                  Total: S/
                  {props.summary.reduce((acc, item) => acc + item.priceProduct * item.countProduct, 0)}
                </p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="breakfast-btns">
        <button className="btn-accept">CONFIRMAR</button>
        <button className="btn-cancel">CANCELAR</button>
      </div>
    </div>

  );
};

export default Summary;
