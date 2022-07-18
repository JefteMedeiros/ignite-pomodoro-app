import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import History from "../pages/History";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default Router;
