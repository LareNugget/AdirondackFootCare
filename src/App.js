import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DropdownNav from './components/DropdownNav';
import Router from 'react';
import Background from './images/waitingroom2.jpg';
import { Switch, Route } from 'react-router-dom'; 
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Staff from './pages/Staff';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Footer from './components/Footer';


const classes = {
    container: "bg-center"
}


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
      <div className={classes.container} style={{height: '100vh', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>  
        <Navbar toggle={toggle} />
        <DropdownNav toggle={toggle} isOpen={isOpen} />

        <Switch>
          <Route path='/' exact component={Home2} />
          <Route path='/about' component={About} />
          <Route path='/staff' component={Staff} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
        </Switch>

        <Footer />
        
      </div>
  );
}

export default App;
