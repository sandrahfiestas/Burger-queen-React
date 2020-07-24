import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Breakfast from './pages/Breakfast';
import Kitchen from './pages/Kitchen';

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

        <Route path="/order">
          <Order />
        </Route>

        <Route path="/kitchen">
          <Kitchen />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
