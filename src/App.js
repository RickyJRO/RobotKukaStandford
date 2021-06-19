import kuka from './assets/kuka.png'
import Standford from './assets/standford.png'
import './App.css';
import robot from './assets/robot.png'
import {motion, AnimatePresence} from 'framer-motion'
import React, {useState} from 'react';
import {Link, Route, Switch, useLocation} from 'react-router-dom';
import Home from './components/Home'
import Kuka from './components/Kuka';
import Standfordd from './components/Standford'
function App() {

  const location = useLocation();

  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Kuka">
          <Kuka />
        </Route>
        <Route path="/Standford">
          <Standfordd />
        </Route>
      </Switch>
    </AnimatePresence>
   
    </>
  );
}

export default App;
