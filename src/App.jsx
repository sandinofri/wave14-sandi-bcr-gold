import React, { useState } from 'react';
import NavbarComponent from './component/NavbarComponent';
import Header from './component/Header';
import About from './component/About';
import WhyUs from './component/WhyUs';
import Testimonial from './component/Testimonial';
import Banner from './component/Banner';
import Faq from './component/Faq';





const App = () => {
  

  return (
    <>
    <NavbarComponent/>
    <Header/>
    <About/>
    <WhyUs/>
    <Testimonial/>
    <Banner/>
    <Faq/>
  
    </>
  );
}

export default App;
