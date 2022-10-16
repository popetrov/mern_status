import React from 'react';
import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper navbar green darken-4">
                <a href="/" className="brand-logo">Meerkat</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Войти</a></li>
                </ul>
            </div>
        </nav>
    );
}

