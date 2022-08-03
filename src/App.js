import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import DetailJoke from './components/DetailJoke';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jokeDetail/:id" element={<DetailJoke />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}