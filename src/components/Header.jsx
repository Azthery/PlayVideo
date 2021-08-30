import React from 'react';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png'
import playVideo from '../assets/static/play-video.png';

const Header = () =>(
    <header className="header">
        <div className="header__icon">
            <img className="header__icon--img" src={playVideo} alt="Play Video"/>
            <p className="header__icon--name">Play Video</p>
        </div>
        <div className="header__menu">
            <div className="header__menu--profile">
            <img src={userIcon}/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
)

export default Header;