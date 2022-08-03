import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import List from "./components/List";
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom';
import DetailJoke from './components/DetailJoke';

export default function App() {

  return (
    // <div className='App'>
    <BrowserRouter>

      <Navbar />
      <List />

        <Home />
     <Footer />

      <Routes>
        <Route path="/jokeDetail/:id" element={<DetailJoke />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}