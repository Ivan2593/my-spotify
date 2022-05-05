import React from 'react';
import Header from "./Header";
import Menu from "./Menu";

function Album() {

    return (
        <div className="App">
            <Header/>
            <Menu/>
            <main className="content">
                <div className="album-head">
                    <img className="album-head__icon" src="image/1.jpg" alt="icon"/>
                    <div className="album-head__info">
                        <p className="album-head__white-text">ПЛЕЙЛИСТ</p>
                        <h1 className="album-head__name">Peace</h1>
                        <p className="album-head__description">Peaceful instrumentals to help you keep calm.</p>
                        <div className="flex-container">
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
                        <div className="flex-container">
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
                        <div className="flex-container">
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
                        <div className="flex-container">
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
        </div>
    );
}

export default Album;