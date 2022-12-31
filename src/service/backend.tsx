import axios from 'axios';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from './InterfacesApi';
import { useNavigate } from 'react-router';
import { async } from 'q';
import Product from '../pages/Product';

export default new class {

    async token(page: string) {
        const instance = axios.create({
            baseURL: `192.168.15.5/${page}`,
            timeout: 800000,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('Bearer') }
        });
        axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem('Bearer')}` }
    }

    async Login(email: string, password: string) {
        try {
            const data = {
                "email": email,
                "password": password
            };

            const res = await axios.post('http://192.168.15.5:3005/login', data);
            //await axios.defaults.headers.common['Authorization'] = res.data;
            localStorage.setItem('Bearer', res.data.data);
            const user = await this.GetUserLogado();
            localStorage.setItem('access', user.levelAccess);

            if (res.data.status) {
                const instance = axios.create({
                    baseURL: 'http://192.168.15.5:3000/login',
                    timeout: 800000,
                    headers: { 'Authorization': 'Bearer ' + res.data.data }
                });
                axios.defaults.headers.common = { 'Authorization': `bearer ${res.data.data}` };
                return true;
            }
            //alert(res.data)
            //return false;            
        } catch (err: any) {
            localStorage.setItem('Bearer', '');
            toast.error('Usuário ou senha incorreto!', {
                className: 'toast-error',
                theme: 'colored',
            });
        }
    }

    async Product() {
        try {

            await this.token('product-list');
            const product: API = await axios.get('http://192.168.15.5:3005/product-list');
            return product.data;
        } catch (error) {
            console.log(error);
            const err: any = error;
            return err;
        }
    }

    async RegisterUser(data: any) {
        try {
            await this.token('register-user');
            const res = await axios.post('http://192.168.15.5:3005/user-register', data);
            const user = res.data.data;
            toast.success(`Parabéns ${user.name}! ${res.data.message}`, {
                className: 'toast-success',
                theme: 'colored',
            });
            return true;
        } catch (err: any) {
            toast.error(`Erro ao criar usuário, ${err.response.data.data}`, {
                className: 'toast-error',
                theme: 'colored',
            });
            return false;
        }
    }

    async GetUserLogado() {
        try {
            await this.token('product-list');
            const res: any = await axios.get('http://192.168.15.5:3005/user-logado');
            const user = res.data
            return user.data;
        }catch(err:any){
            toast.error(`Faça login!`, {
                className: 'toast-error',
                theme: 'colored',
                
            });
            return null;
        }
    }
    async Perfil() {
        try {
            await this.token('product-list');
            const res: any = await axios.get('http://192.168.15.5:3005/user-logado');
            const user = res.data
            toast.success(`Seu perfil!, ${user.data.name}!`, {
                className: 'toast-primary',
                theme: 'colored',
                position: toast.POSITION.TOP_LEFT
            });
            return user.data;
        }catch(err:any){
            toast.error(`Faça login!`, {
                className: 'toast-error',
                theme: 'colored',
                
            });
            return null;
        }
    }

    async ListUsers(){
        
        await this.token('user-list');
        const product:any = await this.Product();
        const res: any = await axios.get('http://192.168.15.5:3005/user-list');
        const user = res.data
        return [user, product];
    }

    async RecoverPass(data:any){
       try{
        data = {
            "email":data
        }
        const res: any = await axios.post('http://192.168.15.5:3005/recover-pass', data);
        return true
       }catch(error){
        console.log(error);
        toast.error('Email não encontrado, tente novamente.', {
            className: 'toast-error',
            theme: 'colored',
        });
        return false;
       }
    }

    async EditUser(data:any){
        try{
            await this.token('user-edit');
            const res:any = await axios.put('http://192.168.15.5:3005/user-edit', data);
            const user = await this.GetUserLogado();
            toast.success(`Atualizado com sucesso!`, {
                className: 'toast-primary',
                theme: 'colored',
                position: toast.POSITION.TOP_LEFT
            });
            return user;
        }catch(error:any){
            console.log(error.response.data);
            toast.error(`Error ${error.response.data.data}`, {
                className: 'toast-error',
                theme: 'colored',
            });
            return false;
        }
    }
}