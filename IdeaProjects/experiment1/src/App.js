import React from 'react';
import './App.css';
import Navbar from './components/Navigation';
import About from './components/About';
import Play from './components/Play';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
  <Router>
      <div className="app">
          <Navbar/>
          <div className="container">
                  <Switch>
                      <Route exact path="/"> <Play/></Route>
                      <Route exact path="/about"><About/></Route>
                  </Switch>
          </div>
      </div>
  </Router>
  );
}

export default App;