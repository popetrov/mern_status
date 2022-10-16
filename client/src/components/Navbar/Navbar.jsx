import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext'

import "./Navbar.css"

export const Navbar = () => {
    const {logout, isLogin} = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-wrapper navbar green darken-4">
                <a href="/" className="brand-logo">Meerkat</a>
                {isLogin
                    ?    <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/" onClick={logout}>Выйти</a></li>
                        </ul>
               
                    :   <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/">Войти</a></li>
                        </ul>
                }
            </div>
        </nav>
    );
}

