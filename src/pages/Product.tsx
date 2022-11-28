import NavBar from './template';
import React, { Component } from 'react';
import axios from 'axios';
import Service from '../service/backend';
import API from '../service/InterfacesApi';
const Product = () => {
    (async () => {
       const res:API = await Service.Product();
       if(res.status){

       }else{
        
       }
    })();
    return (
        <main className='Product'>
            <NavBar />
        </main>
    );
}


export default Product;