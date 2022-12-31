import NavBar from './template';
import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import Service from '../service/backend';
import API, { Iprodutct } from '../service/InterfacesApi';
import { useEffect, useState } from 'react';
import '../assets/css/product.css';
import { toast } from 'react-toastify';
import parse from 'html-react-parser';
import { stringify } from 'querystring';

const Product = () => {
    const [mudar, setMudar] = useState<boolean>(false);
    const [res, setRes] = useState<Array<Iprodutct> | null>(null);
    let [data, setData] = useState<any>([{}]);
    let [store, setStore] = useState<any>([{
        product: {},
        qtd: 0,
    }]);

    const [qtd, setQtd] = useState<number>(1)
    useEffect(() => {
        if (!res) {
            getData()
        }
    }, [])
    const url = 'http://192.168.15.5:3005/';
    async function getData() {
        const response: AxiosResponse<Iprodutct> = await Service.Product();
        setRes(response.data as any);
        const token = localStorage.getItem('Bearer');
        const user = await Service.GetUserLogado();
        localStorage.setItem('access', user.levelAccess);
        toast.success(`Produtos`, {
            className: 'toast-success',
            theme: 'colored',
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

    const addCar = (obj: any) => {
        //console.log(obj[1].qtd)
        let name: string = obj[1].car.nome;
        let qtn: number = obj[1].qtd;
        let valor: any = obj[1].car.valor;
        valor = parseFloat(valor);
        let total: any = (valor * qtn);
        let id = 0;
        let verify: any = localStorage.getItem(`${id}`);
        if (verify) id += 1;
        let res = {
            name: name,
            quant: qtn,
            valor: valor,
            total: total
        };
        setData(res);
        return data;
    };


    function getProduct() {

    }

    return (
        <main className='Product'>
            <NavBar />
            <section className='sectionProduct'>
                <div className='container'>
                    <button type="button" className="btn btn-warning fixed" data-bs-toggle="modal" data-bs-target='#carrinho'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg> <span className="badge text-bg-secondary">4</span>
                    </button>
                    <h2 className='bg-dark title text-center'>Produtos</h2>
                    <div className='row'>
                        {res?.map((e: any, id: number) => {
                            return (
                                <>
                                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={e._id}>
                                        <div className="card productCrd" id={e._id} >
                                            <div className="card-body">
                                                <img src={`${url}${e.photo}`} className='imgProduct mb-3' />
                                                <h5 className="card-title">{e.titulo ?? '...'}</h5><hr />
                                                <h6 className="card-subtitle mb-2 text-muted">Categoria: {e.premio}</h6>
                                                <p className="card-text">Descrição: {e.descricao}</p><hr />
                                                <h6>Valor: R${e.valor}</h6>


                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id={e.titulo.replace(' ', '')} aria-labelledby={e._id} aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{e.titulo}</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src={`${url}${e.photo}`} className='imgProduct mb-3' />
                                                    <h6>Descrição: {e.descricao}</h6><hr />
                                                    <h6>Titulo: {e.titulo}</h6><hr />
                                                    <h6>Valor: R${e.valor}</h6><hr />
                                                    <h6>Data incial: {e.dt_init}</h6>
                                                    <h6>Data final: {e.dt_final}</h6>
                                                    <h6>Data sorteio: {e.dt_sorteio}</h6>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger col-12" data-bs-dismiss="modal">Voltar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>

            <div className="modal fade" id="carrinho" aria-labelledby="carrinho" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Carrinho</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Voltar</button>
                            <button type="button" className="btn btn-danger">Finalizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default Product;