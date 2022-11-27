import React, { Component } from 'react';
import NavBar from './template';

class RegisterUser extends Component {
    render() {
        return (
            <main>
                <NavBar />
                <div className='registerUser container'>
                    <div className="row">
                        <div className='col-12'><h2 className='text-center'>Novo Registro!</h2></div><hr />
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Nome Completo</span>
                            <input type="text" className="form-control" id="name" name='name' placeholder='João Alves' required/>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Nome Usuário</span>
                            <input type="text" className='form-control' id='nickname' name='nickname' placeholder='joao123' required/>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Email</span>
                            <input type="email" className="form-control" id="email" name='email' placeholder='email@email' required/>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Senha</span>
                            <input type="password" className="form-control" id="password" name='password' required/>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Celular</span>
                            <input type="number" className="form-control" id="cell" name='cell' required/>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Sexo</span>
                            <select name="sex" id="sex" className='form-control' required>
                                <option value="">Gênero</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className='attrSpan'>Data Nascimento</span>
                            <input type="date" className="form-control" id="birth" name='birth' required/>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 mb-3'>
                            <span className="attrSpan">Foto de perfil</span>
                            <input className="form-control" type="file" id="formFile" name='photo' required/>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <button className='btn btn-dark col-12'>Salvar</button><hr />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default RegisterUser;