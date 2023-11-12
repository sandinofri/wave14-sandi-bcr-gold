import React, { useState } from "react";
import NavbarComponent from "./component/NavbarComponent";
import Footer from "./component/Footer";
import HomePage from "./page/HomePage";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./page/SearchPage";
import DetailPage from "./page/DetailPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/detail/:id" element={<DetailPage/>}/>
      </Routes>
    </>
  );
};

export default App;
