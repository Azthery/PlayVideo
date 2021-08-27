import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
    <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <div className="input main__search">
            <div className="main__search--icon"/>
            <input type="text" className="main__search--input" placeholder="Buscar..."/>
        </div>
    </section>
)

export default Search;