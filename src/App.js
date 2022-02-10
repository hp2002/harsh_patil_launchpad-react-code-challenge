import './CSS/App.css';
import { actionCreate } from './Actions';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostalLookup from './Sites/PostalLookup';
import Universities from './Sites/Universities';
import Navbar from './Sites/Navbar';
import Home from './Sites/Home';

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
