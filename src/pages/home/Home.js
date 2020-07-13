import React from 'react';
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
        <button className="button">Menú</button>
        {/* <button onclick={soyMenu} className="button" style={{fontSize: nombre}}>Menú</button> */}
        <button className="button">Cocina</button>
        </div>

     </div>
  );
}

export default Home;


// function Home() {



//     const soyMenu = () => {
//     alert("menucito");
//     };
    
//     return (
//     <div className="home">
//     <button type="button" onclick={soyMenu}>Menú</button>
    
//     <button type="button">Cocina</button>
    
//     </div>
//     )
//     }
//     export default Home;
