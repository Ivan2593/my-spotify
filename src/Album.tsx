import React from 'react';

function Album() {

    return (
        <div className="App">
            <header className="header">
                <nav className="header__navigation">
                    <a href="/" className="link header__pointer">
                        назад
                    </a>
                    <a href="/" className="link header__pointer">вперед</a>
                </nav>
            </header>
            <aside className="menu">
                <a className="menu__logo-link"><img className="menu__logo" src="image/logo.png" alt="logo"/></a>
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
            <main className="content">
                <div className="album-head">
                    <img className="album-head__icon" src="image/1.jpg" alt="icon"/>
                    <div className="album-head__info">
                        <p className="album-head__white-text">ПЛЕЙЛИСТ</p>
                        <h1 className="album-head__name">Peace</h1>
                        <p className="album-head__description">Peaceful instrumentals to help you keep calm.</p>
                        <div className="album-head__playlist">
                            <a className="album-head__white-text link">Spotify</a>
                            <p className="album-head__white-text">794 361 лайк</p>
                            <p className="album-head__white-text">270 треков,</p>
                            <p className="album-head__white-text visibility"> примерно 13 ч.</p>
                        </div>
                    </div>
                </div>
                <div className="table-songs">
                    <p className="song__info">#</p>
                    <p>НАЗВАНИЕ</p>
                    <p>АЛЬБОМ</p>
                    <p>ДАТА ДОБАВЛЕНИЯ</p>
                    <p className="song__info">ВРЕМЯ</p>
                </div>
                <div className="songs">
                    <div className="song">
                        <a href="./" className="song__number">
                            <p className="song__number-n">1</p>
                            <img className="song__play-icon" src="image/play-icon.png" alt="icon"/>
                        </a>
                        <div className="song__title">
                            <img className="song__card-icon" src="image/1.jpg" alt="icon"/>
                            <div>
                                <h3 className="song__name">Timeless</h3>
                                <a className="song__author">Cristoforo Giordano</a>
                            </div>
                        </div>
                        <a className="song__author">Hourglass</a>
                        <p className="song__data">12 дней назад</p>
                        <div className="song__info">
                            <img className="favourite-icon song__play-icon" src="image/not-favorite-icon.png"
                                 alt="icon"/>
                            <p className="visibility">2:58</p>
                            <img className="favourite-icon song__play-icon" src="image/info-icon.png" alt="icon"/>
                        </div>
                    </div>
                    <div className="song">
                        <a href="./" className="song__number">
                            <p className="song__number-n">1</p>
                            <img className="song__play-icon" src="image/play-icon.png" alt="icon"/>
                        </a>
                        <div className="song__title">
                            <img className="song__card-icon" src="image/1.jpg" alt="icon"/>
                            <div>
                                <h3 className="song__name">Timeless</h3>
                                <a className="song__author">Cristoforo Giordano</a>
                            </div>
                        </div>
                        <a className="song__author">Hourglass</a>
                        <p className="song__data">12 дней назад</p>
                        <div className="song__info">
                            <img className="favourite-icon song__play-icon" src="image/not-favorite-icon.png"
                                 alt="icon"/>
                            <p className="visibility">2:58</p>
                            <img className="favourite-icon song__play-icon" src="image/info-icon.png" alt="icon"/>
                        </div>
                    </div>
                    <div className="song">
                        <a href="./" className="song__number">
                            <p className="song__number-n">1</p>
                            <img className="song__play-icon" src="image/play-icon.png" alt="icon"/>
                        </a>
                        <div className="song__title">
                            <img className="song__card-icon" src="image/1.jpg" alt="icon"/>
                            <div>
                                <h3 className="song__name">Timeless</h3>
                                <a className="song__author">Cristoforo Giordano</a>
                            </div>
                        </div>
                        <a className="song__author">Hourglass</a>
                        <p className="song__data">12 дней назад</p>
                        <div className="song__info">
                            <img className="favourite-icon song__play-icon" src="image/not-favorite-icon.png"
                                 alt="icon"/>
                            <p className="visibility">2:58</p>
                            <img className="favourite-icon song__play-icon" src="image/info-icon.png" alt="icon"/>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer-login__song">
                    <img className="footer-login__song-icon" src="image/1.jpg" alt="icon"/>
                    <div className="footer-login__song-info">
                        <a className="font-color-white link">Timeless</a>
                        <a className="footer-login__song-author link">Cristoforo Giordano</a>
                    </div>
                </div>
                <div className="footer-login__player">
                    <img className="footer-login__player-icon" src="image/begin.png" alt="icon"/>
                    <img className="footer-login__player-icon" src="image/footer-play-icon.png" alt="icon"/>
                    <img className="footer-login__player-icon" src="image/end.png" alt="icon"/>
                </div>
                <div className="footer-login__info">
                    <img className="footer-login__sound-icon" src="image/sound-icon.png" alt="icon"/>
                </div>
            </footer>
        </div>
    );
}

export default Album;