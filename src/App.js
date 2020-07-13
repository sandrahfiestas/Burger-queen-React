import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './globals.css';
import Home from './pages/home/Home';
import Breakfast from './pages/breakfast/Breakfast';
// import LunchDinner from './page/lunch_dinner/Lunch-dinner';
import Kitchen from './pages/kitchen/Kitchen';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
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


// function Test() {
//   return (
//     <div>
//       <p>TEST</p>
//     </div>
//   )
// }


// function App() {
//   return (
//   <>
//   <div className="Globals-background">
//     <Home />
//   </div>
//     <Breakfast />
//     <LunchDinner />
//     <Kitchen />
//   </>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
