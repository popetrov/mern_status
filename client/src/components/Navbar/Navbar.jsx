import {React, useContext} from 'react';
import "./Navbar.css"
import {AuthContext} from "../../context/AuthContext"

const Navbar = () => {
    const {logout,isLogin} = useContext(AuthContext);
    return (
        <div className='Navbar'>
            <nav>
                <div className="nav-wrapper navbar green darken-4">
                    <a href="/" className="brand-logo">Имя сайта</a>
                    {
                        isLogin
                        ?   <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/" onClick={logout}>Выйти</a></li>
                            </ul>
                        :   <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/">Войти</a></li>
                            </ul>
                    }
                        
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
