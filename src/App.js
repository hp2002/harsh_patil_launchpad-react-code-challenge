import './App.css';
import Home from './Home'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostalLookup from './PostalLookup';
import Universities from './Universities';

function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<Home/>} />
        <Route exact={true} path="/universities" element={<Universities/>} /> 
        <Route exact={true} path="/plu" element={<PostalLookup/>} /> 
      </Routes>
    </div>
  );
}

export default App;
