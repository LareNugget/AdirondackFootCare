import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Staff from './pages/Staff';
import Home2 from './pages/Home2';
import Footer from './components/Footer';
<<<<<<< HEAD
import { Layout } from './components/Layout';
=======
import patientPDF from './files/newPatientPacket.pdf';
>>>>>>> 3d58bc49230edea7fd2fedc5321d32e73bf4afbf



function App() {

  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home2} />
        <Route path='/about' component={About} />
        <Route path='/staff' component={Staff} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
      </Switch>
    </Layout> 
  );
}

export default App;
