import NavBar from './template';
import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import Service from '../service/backend';
import API, { Iprodutct } from '../service/InterfacesApi';
import { useEffect, useState } from 'react';
const Product = () => {
    const [mudar, setMudar] = useState<boolean>(false);
    const [res, setRes] = useState<Array<Iprodutct> | null>(null);


    useEffect(() => {
        if (!res) {
            getData()
        }
    }, [])

    async function getData() {
        const response: AxiosResponse<Iprodutct> = await Service.Product();
        setRes(response.data as any);
    }

    return (
        <main className='Product'>
            <NavBar />
            <h1> Teste</h1>
            <h1> Teste</h1>
            {res?.map((e: any, id: number) => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{e.batata ?? '...'}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                )
            })}

            {/* <button
            onClick={()=>{
                setMudar(!mudar)
            }}
            >Mudar nome</button> */}
        </main>
    );
}


export default Product;