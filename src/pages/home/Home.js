import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import './Home.css';


function Home() {
return (
    <div className="home">
        <p>COMPONENTE1: Home</p>
        <img src={logo} className="" alt="logo" />
            <div>
                <Link to="/breakfast">
                    <button className="button">MENÚ</button>
                </Link>
                <Link to="/kitchen">
                    <button className="button">COCINA</button>
                </Link>
            </div>
    </div>
    );
}

export default Home;

