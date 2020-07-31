import React from 'react';
import './styleComponents/Ticket.scss';
import Clock from './Clock';
import iconMore from '../images/icon_more.png';
import iconLess from '../images/icon_less.png';
import remove from '../images/remove.png';

function Ticket() {
  return (
    <div className="">
      <div className="breakfast-ticket">
        <div className="ticket-header">
          <div className="ticket-client">
            <p>
              Ciente :
              <input type="text" placeholder="Nombre de cliente" className="validaty input-client" pattern="([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,30}\\s*)+" />
            </p>
          </div>
          <div className="">
            <p>
              Hora de atención:
              <Clock />
            </p>
            <p>
              Número de Mesa :
              <input type="text" placeholder="N° mesa" className="validaty input-table" pattern="" />
            </p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col" />
              <th scope="col">Cant.</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Total</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* fila con datos de muestra */}
              <th scope="col"><img src={iconMore} alt="" /></th>
              <th scope="col"><img src={iconLess} alt="" /></th>
              <th scope="col">10</th>
              <th scope="col">Jugo</th>
              <th scope="col">10</th>
              <th scope="col">100</th>
              <th scope="col"><img src={remove} alt="" /></th>
            </tr>
          </tbody>
        </table>
        {/* map -> debe mostrar los pedidos */}
      </div>
      <div className="breakfast-btns">
        <button className="btn-accept">CONFIRMAR</button>
        <button className="btn-cancel">CANCELAR</button>
      </div>
    </div>
  );
}

export default Ticket;
