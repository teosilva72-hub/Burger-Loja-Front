import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import Product from "./pages/Product";

function App() {
    return (
        <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register-user" element={<RegisterUser/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </div>
    );
}

export default App;