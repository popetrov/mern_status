import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'

import "./AuthPage.css"

export const AuthPage = () => {
    const [form, setForm] = useState({
        email:"",
        password:""
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () => {
        try{
            await axios.post('/api/auth/registration', {...form},{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log(response))
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
                                        <button className="waves-effect waves-light btn green darken-4">
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
