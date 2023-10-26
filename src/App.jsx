import React, { useState } from 'react';
import NavbarComponent from './component/NavbarComponent';
import Header from './component/Header';
import About from './component/About';
import WhyUs from './component/WhyUs';
import Testimonial from './component/Testimonial';





const App = () => {
  

  return (
    <>
    <NavbarComponent/>
    <Header/>
    <About/>
    <WhyUs/>
    <Testimonial/>
  
    </>
  );
}

export default App;
