import React from "react";
import { Routes, Route, Await } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import Product from "./pages/Product";
import { useState, Component } from 'react';
import Admin from "./pages/Admin";
import PrivateRoute from "./service/private";
import ProtectedRoute from "./service/private";

function App() {
  const verify: any = localStorage.getItem('Bearer');
  
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route 
        path='/admin'
        element={
          <ProtectedRoute user={verify}>
          <Admin/>
        </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;