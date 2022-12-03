import React, { Component } from 'react';
import NavBar from './template';
import { useState } from 'react';
import Service from '../service/backend';
import { useNavigate } from 'react-router';
import {useForm} from 'react-hook-form';
import '../assets/css/registerUser.css';
const RegisterUser = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cell, setCell] = useState('');
    const [sex, setSex] = useState('');
    const [birth, setBirth] = useState('');
    const [photo, setPhoto] = useState<any>(null);
    const navigate = useNavigate();
    const createUser = async (e: any) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        formData.append('nickName', user);
        formData.append('password', pass);
        formData.append('email', email);
        formData.append('cell', cell);
        formData.append('sex', sex);
        formData.append('birth', birth);
        formData.append('photo', photo);
        
        const check:boolean = await Service.RegisterUser(formData);
        if(check){
            if(localStorage.getItem('access') == '2'){
                setTimeout(() => {
                    navigate('/admin');
                }, 3000)
            }else{
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        }
    }
    return (
        <main className='RegisterUser'>
            <NavBar />
            <div className='container'>
                <form onSubmit={createUser}>
                    <div className="row position">
                        <div className='col-12'><h2 className='text-center'>Novo Registro!</h2></div><hr />
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Nome Completo</span>
                            <input type="text" className="form-control" id="name" name='name' placeholder='seu nome...' required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Nome Usuário</span>
                            <input type="text" className='form-control' id='nickname' name='nickName' placeholder='Nickname' required
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Email</span>
                            <input type="email" className="form-control" id="email" name='email' placeholder='email@email' required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Senha</span>
                            <input type="password" className="form-control" id="password" name='password' required
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Celular</span>
                            <input type="number" className="form-control" id="cell" name='cell' required
                                value={cell}
                                onChange={(e) => setCell(e.target.value)}
                            />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Sexo</span>
                            <select name="sex" id="sex" className='form-control' required
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                            >
                                <option value="">Gênero</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Data Nascimento</span>
                            <input type="date" className="form-control" id="birth" name='birth' required
                                value={birth}
                                onChange={(e) => setBirth(e.target.value)}
                            />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className="attrSpan">Foto de perfil</span>
                            <input className="form-control" type="file" id="formFile" name='photo'
                                
                                onChange={(e:any) => {setPhoto(e.target.files[0])}} required

                            />
                        </div>
                        <div className='col-sm-12 col-md-12'>
                            <button className='btn btn-dark col-12'>Salvar</button><hr />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default RegisterUser;