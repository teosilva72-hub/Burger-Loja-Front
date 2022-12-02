import NavBar from './template';
import '../assets/css/admin.css';
import Service from '../service/backend';
import { useNavigate } from 'react-router';
import { async } from 'q';
import { useState } from 'react';

export default function Admin() {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cell, setCell] = useState('');
    const [sex, setSex] = useState('');
    const [birth, setBirth] = useState('');
    const [photo, setPhoto] = useState<any>(null);
    const [urlImg, setUrlImg] = useState('');
    const [totalUser, setTotalUser] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const access = localStorage.getItem('access');
    const [objUser, setObjUser] = useState<Array<any> | null>(null);
    const [objProduct, setObjProduct] = useState<Array<any> | null>(null);
    const navigate = useNavigate();
    let registerProd: boolean = false;
    const viewRegister = (e: boolean) => {
        registerProd = e;
    }

    (async () => {
        const obj = await Service.ListUsers();
        const users = obj[0];
        const product = obj[1];
        setTotalUser(users.data.length);
        setTotalProduct(product.data.length);
        setObjProduct(product.data);
        setObjUser(users.data);
    })();

    return (

        <main className='Admin'>
            <div><NavBar /></div>
            <div className='admin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <hr /><h4 className='text-center'>Painel Admin</h4><hr />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
                            <div className="card">
                                <div className="card-body cardAdmin">
                                    <h4 className="card-title text-center">Usuários</h4><hr />
                                    <h5 className='card-title text-center'>Total: <b>{totalUser}</b></h5><hr />
                                    <div className='row'>
                                        <div className='col-6'><a href='/register-user' className='btn btn-primary col-12'>Cadastrar</a></div>
                                        <div className='col-6'><button type='button' className='btn btn-dark col-12' data-bs-toggle="modal" data-bs-target="#modalUsuario">Tabela</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
                            <div className="card">
                                <div className="card-body cardAdmin">
                                    <h4 className="card-title text-center">Produtos</h4><hr />
                                    <h5 className='card-title text-center'>Total: {totalProduct}</h5><hr />
                                    <div className='row'>
                                        <div className='col-6'> <button type='button' className='btn btn-primary col-12' data-bs-toggle="modal" data-bs-target="#cadProduct">Cadastrar</button></div>
                                        <div className='col-6'><a href='/register-user' className='btn btn-dark col-12' data-bs-toggle="modal" data-bs-target="#modalProduto">Tabela</a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
                            <div className="card">
                                <div className="card-body cardAdmin">
                                    <h4 className="card-title text-center">Pedidos</h4><hr />
                                    <h5 className='card-title text-center'>Total: 279 | Cancelados: 25</h5><hr />
                                    <div className='row'>
                                        <div className='col-6'> <button type='button' className='btn btn-primary col-12 disabled'>Ver</button></div>
                                        <div className='col-6'><a href='#' className='btn btn-dark col-12 disabled'>Tabela</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
                            <div className="card">
                                <div className="card-body cardAdmin">
                                    <h4 className="card-title text-center">Card title</h4><hr />
                                    <h5 className='card-title text-center'>Total: {totalUser}</h5><hr />
                                    <div className='row'>
                                        <div className='col-6'> <button type='button' className='btn btn-primary col-12 disabled'>Ver</button></div>
                                        <div className='col-6'><a href='#' className='btn btn-dark col-12 disabled'>Tabela</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            //modal cadastrar produtos
            <div className="modal fade" id="cadProduct" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Novo</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">

                                    <div className='col-12'>
                                        <hr /><h1 className='text-center mb-3'>Cadastro de produtos</h1><hr />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>tema</span>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Categoria</span>
                                        <input type="text" className="form-control" name="categoria" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Nome Produto</span>
                                        <input type="text" className="form-control" name="nome" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Modelo</span>
                                        <input type="text" className="form-control" name="modelo" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Marca</span>
                                        <input type="text" className="form-control" name="marca" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Quantidade</span>
                                        <input type="text" className="form-control" name="quantidade" />
                                    </div>

                                    <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                            <label>Descrição</label>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Código Barras</span>
                                        <input type="text" className="form-control" name="cod_barras" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Data Fabricação</span>
                                        <span className='titleInput'>Atual: </span>
                                        <input type="date" className="form-control" name="dt_fabricacao" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Data Validade</span>
                                        <span className='titleInput'>Atual: </span>
                                        <input type="text" className="form-control" name="dt_validade" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Fabricante</span>
                                        <input type="text" className="form-control" name="fabricante" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>Localização</span>
                                        <input type="text" className="form-control" name="localizacao" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <span className='titleInput'>valor</span>
                                        <input type="text" className="form-control" name="valor" />
                                    </div>

                                    <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                                        <span className='titleInput'>Foto do Produto</span>
                                        <div className="mb-3">
                                            <input className="form-control" type="file" id="formFile" name='photo' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Voltar</button>
                            <input type="submit" className="btn btn-danger" value="Cadastrar" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalUsuario" aria-labelledby="modalUsuario" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Lista de Usuários</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-dark table-striped" >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Nickname</th>
                                        <th scope="col">Telefone</th>
                                        
                                    </tr>
                                </thead>
                                {objUser?.map((e: any, id: number) => {
                                    return (
                                        <>

                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>{e.name}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>{e.nickName}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td >{e.cell}</td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })}
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalProduto" aria-labelledby="modalProduto" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Lista de Produtos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

