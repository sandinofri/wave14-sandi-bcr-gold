import React, { useState } from 'react';
import NavbarComponent from './component/NavbarComponent';
import Header from './component/Header';
import About from './component/About';
import WhyUs from './component/WhyUs';
import Testimonial from './component/Testimonial';
import Banner from './component/Banner';
import Faq from './component/Faq';
import Footer from './component/Footer';





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
    <Footer/>
  
    </>
  );
}

export default App;
