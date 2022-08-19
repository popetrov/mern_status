import {React, useState} from 'react';
import axios from "axios"
import "./Registration.css"

const Registration = () => {
    const[form, setForm] = useState({
        email:"",
        password:""
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () => {
        try{
            await axios.post('/api/auth/registration', {...form}, {
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .then(response => window.M.toast({html: response.data.message, classes: 'rounded green'}))
        }catch(e){
            window.M.toast({html: e.response.data.message, classes: 'rounded red'})
        }
    }

    return (
        <div className='Registration'>
            <div className='container'>
                <h3>Регистрация</h3>
                <form 
                    className='form form-login'
                    onSubmit={e => e.preventDefault()}
                >
                    <div className='row'>
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
                            onClick={registerHandler}>
                                Регистрация
                        </button>
                        <a href='/login' className='btn-outline btn-reg'>Уже есть акаунт?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
