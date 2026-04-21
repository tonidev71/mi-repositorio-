// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-zeniza">
      <div className="logo">
        <h1 className="titulo-portafolio-mini">PORTAFOLIO</h1>
      </div>
      <nav className="nav-links">
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;