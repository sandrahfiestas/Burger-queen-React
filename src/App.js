import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Breakfast from './pages/breakfast/Breakfast';
import Kitchen from './pages/kitchen/Kitchen';

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
