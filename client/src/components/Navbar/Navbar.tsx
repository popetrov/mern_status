import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav>
                <div className="nav-wrapper navbar green darken-4">
                    <a href="/" className="brand-logo">MEERCAT</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Войти</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}