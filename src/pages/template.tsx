import { Component, useState } from "react";
import { useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Template() {

  const verify: any = localStorage.getItem('Bearer');
  const navigate = useNavigate();
  function logout() {

    localStorage.removeItem('Bearer');
    toast.success(`Tchau, Volte Sempre!`, {
      className: 'toast-success',
      theme: 'colored',
  });
    navigate('/');
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top" id='teste'>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Empresa</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" id="links">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item auth">
              <a className="nav-link" href="/product">Produto</a>
            </li>
            {
              !verify &&
              <>
                <li className="nav-item auth">
                  <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register-user">Cadastrar-se</a>
                </li>
              </>
            }
            {
              verify &&
              <li className="nav-item auth" onClick={() => logout()}>
                <a className="nav-link">Sair</a>
              </li>

            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
