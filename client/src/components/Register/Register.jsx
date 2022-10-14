import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './Register.css'


export const Register = () => {
    const [form, setForm] = useState({
        email:'',
        password:''
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
        console.log(form)
    }

    const registerHandler = async () => {
        try{
            await axios.post('/api/auth/registration', {...form}, {
                headers: {
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
            <h3 className="text">Регистрация</h3>
            <form 
                className="form form-login" 
                onSubmit={e => e.preventDefault()}
            >
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="email" 
                            name="email"
                            className="validate"
                            placeholder="E-mail"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                            type="password" 
                            name="password"
                            className="password"
                            placeholder="Пароль"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="row">
                    <button 
                        className="waves-effect waves-light btn green"
                        onClick={registerHandler}
                    >
                        Зарегистрироваться
                    </button>
                    <Link to="/login" className="btn-outline btn-login">Есть акаунт?</Link>
                </div>
            </form>
        </div>
    )
}