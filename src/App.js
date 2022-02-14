import './CSS/App.css';
import { actionCreate } from './Actions';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostalLookup from './Components/PostalLookup';
import Universities from './Components/Universities';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
 
  return (
    <div>
    <h1 className='heading'> Welcome to ABC Company</h1>
    <Navbar />
      <Routes>
        <Route exact={true} path="/" element={<Home/>} />
        <Route exact={true} path="/universities" element={<Universities/>} /> 
        <Route exact={true} path="/plu" element={<PostalLookup/>} /> 
      </Routes>
      
    </div>
  );
}

export default App
