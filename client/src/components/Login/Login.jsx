import {React, useState, useContext} from 'react';
import axios from "axios"
import "./Login.css"
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const[form, setForm] = useState({
        email:"",
        password:""
    })

    const {login} = useContext(AuthContext)

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const loginHandler = async () => {
        try {
            await axios.post('/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .then(response => {
                login(response.data.token, response.data.userId)
            })
        }catch(e){
            window.M.toast({html: e.response.data.message, classes: 'rounded red'})
        }

    }
    return (
        <div className='Login'>
            <div className='container'>
                <form 
                    className='form form-login'
                    onSubmit={e => e.preventDefault()}
                >
                    <div className='row'>
                        <h3>Авторизация</h3>
                        <div className='input-field col s12'>
                            <input 
                                className='validate'
                                type="email"
                                name="email"
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='input-field col s12'>
                            <input 
                                className='validate'
                                type="password"
                                name="password"
                                onChange={changeHandler}
                            />
                            <label htmlFor="password">Пароль</label>
                        </div>
                    </div>
                    <div className='row'>
                        <button 
                            className='waves-effect waves-light btn black-text yellow darken-2'
                            onClick={loginHandler}
                        >
                            Войти
                        </button>
                        <a href='/registration' className='btn-outline btn-reg'>Нет акаунта? Зарегистрируйся</a>
                    </div>
                </form>
            </div>               
        </div>
    );
}

export default Login;
