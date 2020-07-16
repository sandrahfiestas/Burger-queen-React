import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import './Home.scss';


function Home() {
return (
    <div className="home-container">
        <div className="home-logo">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="home-btns">
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
