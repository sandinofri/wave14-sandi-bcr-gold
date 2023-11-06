import React, { useState } from 'react';
import NavbarComponent from './component/NavbarComponent';
import Footer from './component/Footer';
import HomePage from './page/HomePage';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './page/SearchPage';





const App = () => {
  

  return (
    <>
    <NavbarComponent/>
    <Routes>
      <Route path='*' element={<HomePage/>}/>
      <Route path='/searchPage' element={<SearchPage/>}/>
    </Routes>
    <Footer/>
  
    </>
  );
}

export default App;
