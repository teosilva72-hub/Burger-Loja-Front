import React, { Component } from 'react';
import { useState } from "react";
import '../assets/css/login.css'
import jpIMG from "../assets/img/jp.svg";
import NavBar from './template';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <main>
            <NavBar />
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form">
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
                                <button className="login-form-btn">Login</button>
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