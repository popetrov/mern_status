import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext'

import "./Navbar.css"

export const Navbar = () => {
    const {logout, isLogin} = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-wrapper navbar green darken-4">
                <a href="/" className="brand-logo ">Meerkat</a>
                {isLogin
                    ?    <ul id="nav-mobile" className="right">
                            <li>
                                <a className="" href="/" onClick={logout}>
                                    <i className="material-icons white-text">exit_to_app</i>
                                </a>
                            </li>
                        </ul>
               
                    :   <ul id="nav-mobile" className="right">
                            <li><a className="" href="/">Войти</a></li>
                        </ul>
                }
            </div>
        </nav>
    );
}

