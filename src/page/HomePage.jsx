import React from 'react'
import Header from '../component/Header'
import About from '../component/About'
import WhyUs from '../component/WhyUs'
import Testimonial from '../component/Testimonial'
import Banner from '../component/Banner'
import Faq from '../component/Faq'
import  NavbarComponent from '../component/NavbarComponent'
import Footer from '../component/Footer'

const HomePage = () => {
  return (
    <>
    <NavbarComponent/>
    <Header showButton={true} showImage={true} showDesc={true}/>
    <About/>
    <WhyUs/>
    <Testimonial/>
    <Banner/>
    <Faq/>
    <Footer/>
    
    </>
  )
}

export default HomePage