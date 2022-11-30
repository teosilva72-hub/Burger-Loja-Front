import NavBar from './template';
import React, { Component } from 'react';
import { useNavigate } from 'react-router';
const Home = () => {
  const navigate = useNavigate();
  const auth: any = localStorage.getItem('Bearer');
  if(auth === null){
    console.log('aqui')
    navigate('/product');
  }  

  return (
    <div>
      <NavBar />
    </div>
  );
}
export default Home;

