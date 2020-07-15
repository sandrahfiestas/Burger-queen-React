import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Home.css';

function Home() {

  //const [nombre, setNombre] = React.useState();

  // const soyMenu = () => {
  //     alert("menucito")
  // }

  //const modificarTexto = (e) => {
  //setNombre(e.target.value);
  //}
  
  return (
    <div className="home">

      <div className="container">
        <img src={logo} className="" alt="logo" />
        <Link to="/breakfast">
          <button className="button">MENU</button>
        </Link>
        <br>
        </br>
        {/* <button onclick={soyMenu} className="button" style={{fontSize: nombre}}>Menú</button> */}
        <Link to="/kitchen">
          <button className="button">COCINA</button>
        </Link>
      </div>

    </div>
  );
}

export default Home;
