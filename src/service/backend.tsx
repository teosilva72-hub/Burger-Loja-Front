import axios from 'axios';
import { redirect } from 'react-router-dom';
import API from './InterfacesApi';
export default new class {

    async token(page: string) {
        const instance = axios.create({
            baseURL: `http://localhost:3000/${page}`,
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

            const res = await axios.post('http://localhost:3005/login', data);
            //await axios.defaults.headers.common['Authorization'] = res.data;
            localStorage.setItem('Bearer', res.data.data);
            if (res.data.status) {
                const instance = axios.create({
                    baseURL: 'http://localhost:3000/login',
                    timeout: 800000,
                    headers: { 'Authorization': 'Bearer ' + res.data.data }
                });
                axios.defaults.headers.common = { 'Authorization': `bearer ${res.data.data}` };
                redirect('localhost:3000/')
                return true;
            }
            alert(res.data)
            //return false;            
        } catch (error) {
            return false;
        }
    }

    async Product() {
        try {
            await this.token('product');
            const product:API = await axios.get('http://localhost:3005/product-list');
            return product.data;
        } catch (error) {
            console.log(error);
            const err:any = error;
            return err;
        }
    }

    async RegisterUser(data: any) {

    }
}