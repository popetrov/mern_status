import React, { useState, useContext } from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios'

import "./AuthPage.css"
import { AuthContext } from '../../context/AuthContext';

export const AuthPage = () => {
    const history = useHistory()

    const [form, setForm] = useState({
        email:"",
        password:""
    })

    const {login} = useContext(AuthContext)

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () => {
        try{
            await axios.post('https://popetrov-mern.herokuapp.com/api/auth/registration', {...form},{
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "X-Requested-With": "XMLHttpRequest",
                    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                }
            })
            
            history.push('/')
        }catch(e){
            console.log(e)
        }
    }

    const loginHandler = async () => {
        try{
           await axios.post('https://popetrov-mern.herokuapp.com/api/auth/login', {...form},{
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "X-Requested-With": "XMLHttpRequest",
                    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                }
            })
            .then(response => {
                login(response.data.token, response.data.userId)
            })
        }catch(e){
            console.log(e)
        }
    }
    return (
        <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <div className="container">
                        <div className="auth-page">
                            <Route path="/login">
                                <h3 className='header'>Авторизация</h3>
                                <form 
                                    className='form form-login'
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                                type="email"
                                                name='email' 
                                                className="validate"
                                                onChange={changeHandler} 
                                            />
                                            <label htmlFor="email">E-mail</label>
                                        </div>
                                        <div className="input-field col s12">
                                                <input 
                                                    type="password"
                                                    name='password' 
                                                    className="validate"
                                                    onChange={changeHandler}  
                                                />
                                            <label htmlFor="password">Пароль</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button 
                                            className="waves-effect waves-light btn green darken-4"
                                            onClick={loginHandler}
                                        >
                                            Войти
                                        </button>
                                        <Link to="/registration" className="btn-outline btn-reg">
                                            Нет акаунта? Зарегистрируйтесь
                                        </Link>
                                    </div>
                                </form>
                            </Route>


                            <Route path="/registration">
                                <h3 className='header'>Регистрация</h3>
                                <form 
                                    className='form form-login'
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                                type="email"
                                                name='email' 
                                                className="validate"
                                                onChange={changeHandler}  
                                            />
                                            <label htmlFor="email">E-mail</label>
                                        </div>
                                        <div className="input-field col s12">
                                                <input 
                                                    type="password"
                                                    name='password' 
                                                    className="validate" 
                                                    onChange={changeHandler} 
                                                />
                                            <label htmlFor="password">Пароль</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button 
                                            className="waves-effect waves-light btn green darken-4"
                                            onClick={registerHandler}
                                        >
                                            Зарегистрироваться
                                        </button>
                                        <Link to="/login" className="btn-outline btn-reg">
                                            Уже есть акаунт? Войти
                                        </Link>
                                    </div>
                                </form>
                            </Route>
                        </div>
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}
