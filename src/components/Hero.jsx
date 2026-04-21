// src/components/Hero.jsx
import './Hero.css';
import logo from "../assets/iconotoni.png"; // 1. IMPORTAMOS TU LOGO

const Hero = () => {
  return (
    <section id="inicio" className="hero-container">
      
      {/* 2. HEADER CON EL LOGO (Parte Izquierda) */}
      <header className="hero-header">
        <div className="logo-container">
          <img src={logo} alt="Toni Dev Logo" className="logo-img" />
          <span className="logo-text">ToniDev71</span> {/* Opcional: Tu nombre al lado del logo */}
        </div>
      </header>

      {/* 3. BANNER ANIMADO Y EL H1 (Justo debajo del Header) */}
      <div className="animated-banner">
        {/* Aquí es donde tu H1 estará más arriba */}
        <h1 className="hero-title">
          <span className="welcome-text"></span>
          <span className="name-text"> Desarrollador Web</span>
        </h1>
        {/* Opcional: Un subtítulo dentro del banner */}
        <p className="hero-subtitle">Conocimientos en , HTML5 | CSS3 | JAVASCRIPT | SASS...</p>
      </div>

    </section>
  );
};

export default Hero;