import "./AuthPage.css"

export const AuthPage = () => {
    return (
        <div className='AuthPage'>
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
                        <a href="/" className="btn-outline btn-reg">Регистрация</a>
                    </div>
                </form>


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
                        <a href="/" className="btn-outline btn-login">Есть акаунт?</a>
                    </div>
                </form>
           </div>
        </div>
    )
}