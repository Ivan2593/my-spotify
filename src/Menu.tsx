import React from 'react';

function Menu() {
    return(
        <aside className="menu">
            <a className="cursor-visibility"><img className="menu__logo" src="image/logo.png" alt="logo"/></a>
            <ul className="menu__tags">
                <a className="menu__item">
                    <img className="menu__icon" src="image/home.png" alt="home"/>
                    <li className="tag">Главная</li>
                </a>
                <a className="menu__item">
                    <img className="menu__icon" src="image/search.png" alt="search"/>
                    <li className="tag">Поиск</li>
                </a>
                <a className="menu__item">
                    <img className="menu__icon" src="image/media.png" alt="media"/>
                    <li className="tag">Моя медиатека</li>
                </a>
            </ul>
        </aside>
    );

}
export default Menu;