import React, { Component } from 'react'

import Header from '../header';
import Hero from '../hero';
import About from '../about';
import Brands from '../brands';
import Portfolio from '../portfolio';
import Contacts from '../contacts';
import Form from '../form';


import './app.scss';

const App = () => {
  return(
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Brands/>
      <Portfolio/>
      <Contacts/>
      <Form/>
    </div>
  )
}

export default App;