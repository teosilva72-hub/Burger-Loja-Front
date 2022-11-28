import React, { Component } from 'react';
import { useState, useEffect, useRef } from "react";
import '../assets/css/login.css'
import jpIMG from "../assets/img/jp.svg";
import NavBar from './template';
import axios from 'axios';
import Service from '../service/backend';
import { useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const requestLogin = async (e: any) => {
        e.preventDefault();
        const checked: any = await Service.Login(email, password);
        if (checked) {
            toast.success('Acesso Autorizado!', {
                className: 'toast-success',
                theme: 'colored',
            });
            setTimeout(() => {
                navigate('/');
            }, 3000)
        }
    }

    return (
        <main>
            <NavBar />
            <div className="container">

                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form" onSubmit={requestLogin}>
                            <span className="login-form-title"> Bem vindo </span>
                            <span className="login-form-title">
                                <img src={jpIMG} alt="Jovem Programador" />
                            </span>
                            <div className="wrap-input">
                                <input
                                    className={email !== "" ? "has-val input" : "input"}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className="focus-input" data-placeholder="Email"></span>
                            </div>
                            <div className="wrap-input">
                                <input
                                    className={password !== "" ? "has-val input" : "input"}
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="focus-input" data-placeholder="Password"></span>
                            </div>
                            <div className="container-login-form-btn">
                                <button type='submit' className="login-form-btn">Login</button>
                            </div>
                            <div className="text-center">
                                <span className="txt1">Não possui conta? </span>
                                <a className="txt2" href="/register-user">
                                    Criar conta
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Login;