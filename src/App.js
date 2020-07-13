import React from 'react';
import './App.css';
import Home from './pages/home/Home.js';
import Breakfast from './pages/breakfast/Breakfast.js';
import Kitchen from './pages/kitchen/Kitchen.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/breakfast">
          <Breakfast />
        </Route>

        <Route path="/kitchen">
          <Kitchen />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;