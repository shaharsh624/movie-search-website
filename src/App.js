import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Movie />} />
    </Routes>
  );
};

export default App;
