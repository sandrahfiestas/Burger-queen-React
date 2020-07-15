import React from 'react';
import {Link} from 'react-router-dom';
// import background from '../../images/background.jpg';
import logo from '../../images/logo.png';
import './Home.css';


function Home() {
return (
    <div className="home-container">
        <img src={logo} className="logo" alt="logo" />
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

