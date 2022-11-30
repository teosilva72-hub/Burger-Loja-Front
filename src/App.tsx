import React from "react";
import { Routes, Route, Await } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import Product from "./pages/Product";
import {useState} from 'react';

function App() {
  const verify: any = localStorage.getItem('Bearer');
    return (
        <div className="App">
      <Routes>
        <Route path="/" element={ <Product/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register-user" element={<RegisterUser/>}/>
      </Routes>
    </div>
    );
}

export default App;