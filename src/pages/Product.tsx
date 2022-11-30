import NavBar from './template';
import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import Service from '../service/backend';
import API, { Iprodutct } from '../service/InterfacesApi';
import { useEffect, useState } from 'react';
import '../assets/css/product.css';

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
        const token = localStorage.getItem('Bearer');
        const user = await Service.GetUserLogado();
        console.log(user)
    }

    return (
        <main className='Product'>
            <NavBar />
            <section className='sectionProduct'>
                <div className='container'>
                    <h2 className='bg-dark title text-center'>Produtos</h2>
                    <div className='row'>
                        {res?.map((e: any, id: number) => {
                            return (
                                <div className='col-sm-12 col-md-6 col-lg-3 mb-3' key={e._id}>
                                    <div className="card" id={e._id} >
                                        <div className="card-body">
                                            <h5 className="card-title">{e.nome ?? '...'}</h5><hr />
                                            <h5 className="card-subtitle mb-2 text-muted">Categoria: {e.categoria}</h5>
                                            <h6 className="card-text">Descrição: {e.descricao}</h6>
                                            <h6>Preço: R${e.valor}</h6>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


        </main>
    );
}


export default Product;