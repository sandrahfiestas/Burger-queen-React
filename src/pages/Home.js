import React from 'react';
import './Home.css';

function Home() {



const soyMenu = () => {
alert("menucito");
};

return (
<div className="home">
<button type="button" onclick={soyMenu}>Menú</button>

<button type="button">Cocina</button>

</div>
)
}
export default Home;