import React from 'react';

function Header() {
    return(
        <header className="header">
            <nav className="header__navigation">
                <a href="/" className="link header__pointer">
                    назад
                </a>
                <a href="/" className="link header__pointer">вперед</a>
            </nav>
        </header>
    );

}
export default Header;