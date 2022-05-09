import React from 'react';

function Menu() {
    return(
        <aside className="menu">
            <a className="cursor-visibility" href="/"><img className="menu__logo" src="http://localhost:3000/images/logo.png" alt="logo"/></a>
            <ul className="menu__tags">
                <a className="menu__item" href="/">
                    <img className="menu__icon" src="http://localhost:3000/images/home.png" alt="home"/>
                    <li className="tag">Главная</li>
                </a>
                <a className="menu__item" href="/input">
                    <img className="menu__icon" src="http://localhost:3000/images/search.png" alt="search"/>
                    <li className="tag">Поиск</li>
                </a>
            </ul>
        </aside>
    );

}
export default Menu;