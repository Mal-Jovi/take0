import React from 'react';
import './App.css';
import Navbar from './components/Navigation';
import About from './components/About';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Demo from './components/Demo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const title = 'welcome, stranger';
  return (
  <Router>
      <div className="app">
          <Navbar/>
          <div className="container">
              <div className="titleContainer">HELLO WORLD!</div>
              <div className="textContainer">
                  <h1>{ title }</h1>
                  <p>Once upon a time...</p>

                  <Switch>
                      <Route exact path="/Demo"><Demo/></Route>
                      <Route exact path="/"> <Home/></Route>
                      <Route exact path="/about"><About/></Route>
                      <Route exact path="/resume"><Resume/></Route>
                      <Route exact path="/contact"><Contact/></Route>
                  </Switch>
              </div>
          </div>
      </div>
  </Router>
  );
}

export default App;