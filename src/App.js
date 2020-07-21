import React, { useState, Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/home/Home';
import Breakfast from './components/breakfast/Breakfast';
import Kitchen from './components/kitchen/Kitchen';

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
