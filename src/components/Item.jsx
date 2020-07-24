import React from 'react';
import './Item.scss';

function Item(props) {
  console.log(props);
  return (
    <div className="breakfast-item">
      <img src="" className="breakfast-product" alt="coffee" />
      {/* <p>Café americano</p> */}
      {props.product}
      <div>
        <button>
          <img src="" className="icons-more-less" alt="icon_less" />
        </button>
        S/5.00
        <img src="" className="icons-more-less" alt="icon_more" />
      </div>
    </div>
  );
}

export default Item;
