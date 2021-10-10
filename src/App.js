import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import './App.css'
import Media from './Pages/MediaListing';
import About from './Pages/About';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/About">
            <About/>
            </Route>
           <Route path="/Media">
            <Media />
            </Route>
           <Route path="/contact">
            <Contact />
            </Route>
           <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}