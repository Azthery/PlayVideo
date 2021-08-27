import React from 'react';

import '../assets/styles/components/Header.scss';

const Header = () =>(
    <header className="header">
        <div className="header__icon">
            <img className="header__icon--img" src="https://img.icons8.com/color-glass/48/000000/play.png" alt="Play Video"/>
            <p className="header__icon--name">Play Video</p>
        </div>
        <div className="header__menu">
            <div className="header__menu--profile">
            <img src="https://img.icons8.com/material-sharp/60/ffffff/user-male-circle.png"/>
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