import React from "react";
import Home from "./app/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./app/Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
