import React from 'react'
import Header from '../component/Header'
import About from '../component/About'
import WhyUs from '../component/WhyUs'
import Testimonial from '../component/Testimonial'
import Banner from '../component/Banner'
import Faq from '../component/Faq'

const HomePage = () => {
  return (
    <>
    <Header showButton={true}/>
    <About/>
    <WhyUs/>
    <Testimonial/>
    <Banner/>
    <Faq/>
    
    </>
  )
}

export default HomePage