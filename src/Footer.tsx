import React from 'react';

function Footer() {
    return(
        <footer className="footer">
            <div className="flex-container">
                <img className="footer-login__song-icon" src="image/1.jpg" alt="icon"/>
                <div className="footer-login__song-info">
                    <a className="font-color-white link">Timeless</a>
                    <a className="font-color-white visibility  link">Cristoforo Giordano</a>
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
    );

}
export default Footer;