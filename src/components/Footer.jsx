// src/components/Footer.jsx
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contacto" className="footer-container">
            <h2 className="footer-title">¿Hablamos?</h2>
            <p className="footer-text">
                Estoy disponible para nuevos proyectos y colaboraciones.
            </p>
            <a href="mailto:tu-email@ejemplo.com" className="email-link">
                tu-email@ejemplo.com
            </a>
            <div className="social-links">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
            </div>
            <p className="copyright">
                © {new Date().getFullYear()} Todos los derechos reservados | Antonio Baena Moreno | www.tonidev71.com
            </p>
        </footer>
    );
};

export default Footer;