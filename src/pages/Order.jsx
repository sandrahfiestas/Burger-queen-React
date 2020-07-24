import React, { useState , Component } from 'react';

const Order = () => {
  const [nombre, setNombre] = useState();

  const onClickAdd = () => {
    alert('CLICK AÑADIENDO PRODUCTO');
  };

  const modificarTexto = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div>

      <input type="text" onChange={modificarTexto} />

      <button onClick={onClickAdd} style={{ fontSize: nombre }}>CLICK</button>

    </div>

  //     <div id="list-container">
  //       <ListDisplay
  //         items={items}
  //         handleClick={(item) => {
  //           setItems(items.slice().filter((i) => i !== item));
  //         }}
  //       />
  //       <InputText handleSubmit={(item) => {
  //         setItems(items.concat(item));
  //       }}
  //       />
  //     </div>
  //   );
  // };

  // const ListItem = (props) => (
  //   <li onClick={() => props.handleClick(props.name)}>{props.name}</li>
  // );

  // const ListDisplay = (props) => {
  //   const items = props.items.map((item, i) => (
  //     <ListItem
  //       key={i}
  //       name={item}
  //       handleClick={props.handleClick}
  //     />
  //   ));
  //   return (
  //     <ul>
  //       {items}
  //     </ul>
  //   );
  // };

  // const InputText = (props) => {
  //   const [value, setValue] = useState('');
  //   return (
  //     <form onSubmit={(e) => {
  //       e.preventDefault();
  //       props.handleSubmit(value);
  //       setValue('');
  //     }}
  //     >
  //       <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
  //     </form>
  );
};

export default Order;
