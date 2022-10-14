import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login.css'

export const Login = () => {
    const [form, setForm] = useState({
        email:'',
        password:''
    });

    const loginHandler = async () => {
        try{
            await axios.post('api/auth/login', {...form},{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log(response))
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div className="container green darken-4">
            <h3 className="text">Авторизация</h3>
            <form className="form form-login">
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="email" 
                            name="email"
                            className="validate"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="input-field">
                        <input 
                            type="password" 
                            name="password"
                            className="password"
                            placeholder="Пароль"
                        />
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn green">
                        Войти
                    </button>
                    <Link to="/register" className="btn-outline btn-reg">Регистрация</Link>
                </div>
            </form>
        </div>
    )
}