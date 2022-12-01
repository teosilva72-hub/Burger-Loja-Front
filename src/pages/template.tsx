import { async } from "q";
import { Component, useState } from "react";
import { useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Service from '../service/backend';
import moment from 'moment';
import '../assets/css/template.css';
export default function Template() {

  const verify: any = localStorage.getItem('Bearer');
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cell, setCell] = useState('');
  const [sex, setSex] = useState('');
  const [birth, setBirth] = useState('');
  const [photo, setPhoto] = useState<any>(null);
  const [urlImg, setUrlImg] = useState('');
  const access: any = localStorage.getItem('access');
  let checkAccess = false;
  if (access == '2') checkAccess = true;
  const logout = () => {
    localStorage.removeItem('Bearer');
    localStorage.removeItem('access');
    toast.success(`Obrigado por usar o nosso serviço. Volte Sempre!`, {
      className: 'toast-success',
      theme: 'colored',
    });

    navigate('/');
  }

  const clickPerfil = (e: any) => {
    e.preventDefault();
    (async () => {
      const data: any = await Service.Perfil();
      let user = data;
      console.log(user)
      setName(user.name);
      setUser(user.nickName);
      setEmail(user.email);
      setPass('');
      setCell(user.cell);
      setSex(user.sex);
      let date: any = moment(user.birth).format('YYYY-MM-DD');
      setBirth(date);
      const url = 'http://192.168.15.4:3005/';
      setUrlImg(`${url}${user.photo}`);

    })();
  }
  const perfil = (e: any) => {
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
  }

  const admin = () =>{
    navigate('/admin');
  }
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top" id='teste'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Empresa</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="links">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
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
                checkAccess &&
                <>
                  <li className="nav-item auth">
                    <a className="nav-link" href='#' data-bs-toggle="modal" onClick={admin}>Admin</a>
                  </li>
                </>
              }
              {
                verify &&
                <>
                  <li className="nav-item auth">
                    <a className="nav-link" href='#' data-bs-toggle="modal" data-bs-target="#perfil" onClick={clickPerfil}>Perfil</a>
                  </li>
                  <li className="nav-item auth" onClick={() => logout()}>
                    <a className="nav-link">Sair</a>
                  </li>
                </>
              }

            </ul>
          </div>
        </div>
      </nav>

      //Modal perfil
      <div className="modal fade" id="perfil" aria-labelledby="perfil" aria-hidden="true">
        <form onSubmit={perfil}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Meu Perfil</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className='col-12'><h2 className='text-center'>Novo Registro!</h2></div><hr />
                  <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                    <img src={urlImg} className='imgPerfil' />
                  </div>
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
                    <input type="password" className="form-control" id="password" name='password'
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

                      onChange={(e: any) => { setPhoto(e.target.files[0]) }}

                    />
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Voltar</button>
                <button type="submit" className="btn btn-danger">Atualizar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>


  );
}
