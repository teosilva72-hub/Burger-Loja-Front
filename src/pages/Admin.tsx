import NavBar from './template';
import '../assets/css/admin.css';
export default function Admin() {

    return (

        <main className='Admin'>
            <div><NavBar /></div>
            <div className='admin'>
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
        </main>

    );
}

