import { Link } from 'react-router-dom'
import './Register.css'

export const Register = () => {
    return(
        <div className="container green darken-4">
            <h3 className="text">Регистрация</h3>
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
                        Зарегистрироваться
                    </button>
                    <Link to="/login" className="btn-outline btn-login">Есть акаунт?</Link>
                </div>
            </form>
        </div>
    )
}