import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import History from "../pages/History";
import Layout from '../layouts/DefaultLayout/index';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};

export default Router;
