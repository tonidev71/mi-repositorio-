import React, { useState } from 'react';
import './Projects.css';

// --- IMPORTACIONES ---
import miFoto from "../assets/toni2.jpg"; 
import diploma1 from "../assets/diploma1.jpg";
import diploma2 from "../assets/diploma2.jpg";
import diploma3 from "../assets/diploma3.jpg";
import diploma4 from "../assets/diploma4.png";
import p3 from "../assets/proyecto3.png";
import p4 from "../assets/proyecto4.png";
import p5 from "../assets/proyecto5.png";

// --- DATOS ---
const diplomas = [
  { id: 1, title: "Certificado 1", desc: "Descripción 1", img: diploma1 },
  { id: 2, title: "Certificado 2", desc: "Descripción 2", img: diploma2 },
  { id: 3, title: "Certificado 3", desc: "Descripción 3", img: diploma3 },
  { id: 4, title: "Certificado 4", desc: "Descripción 4", img: diploma4 },
];

const myProjects = [
  { id: 3, title: "Proyecto Inventario", desc: "Gestión de inventario 2026", img: p3, link: "https://tonidev71.github.io/inventario-2026/" },
  { id: 4, title: "Proyecto Landing page", desc: "Landing page para empresa de tecnologia", img: p4, link: "https://tonidev71.github.io/Proyecto-landing-page/" },
  { id: 5, title: "Proyecto 5", desc: "Descripción breve del proyecto 5", img: p5, link: "https://tu-link-aqui.com" },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="projects-container">

      {/* SECCIÓN: SOBRE MÍ */}
      <section id="sobre-mi" className="about-me-section">
        <div className="about-me-container">
          <div className="about-me-image-frame">
            <img src={miFoto} alt="Toni Dev" className="about-me-foto" />
          </div>
          <div className="about-me-text">
            <h2 className="section-title-about">Sobre Mí</h2>
            <h3>Desarrollador Web Full Stack</h3>
            <p>Soy un desarrollador web apasionado por crear experiencias digitales excepcionales...</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE DIPLOMAS */}
      <h2 className="section-title" style={{marginTop: '4rem'}}>Diplomas y Certificados</h2>
      <div className="grid">
        {diplomas.map((d) => (
          <div key={d.id} className="card">
            <div className="card-image">
              <img src={d.img} alt={d.title} onClick={() => setSelectedImage(d.img)} />
            </div>
            <div className="card-content">
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SECCIÓN DE PROYECTOS */}
      <h2 className="section-title" style={{marginTop: '4rem'}}>Mis Proyectos</h2>
      <div className="grid">
        {myProjects.map((p) => (
          <div key={p.id} className="card">
            <div className="card-image">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="card-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-project">
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ≡≡≡≡≡ NUEVA SECCIÓN: CONTACTEMOS ≡≡≡≡≡ */}
      <section id="contactemos" className="contact-section" style={{marginTop: '4rem', textAlign: 'center'}}>
        <h2 className="section-title">Contactemos</h2>
        <p>¿Quieres ver mi perfil o explorar mis repositorios? Haz clic abajo:</p>
        
        <div className="social-links" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="https://www.linkedin.com/in/tonidev71" target="_blank" rel="noopener noreferrer" className="btn-social">
            Ver LinkedIn
          </a>
          <a href="https://github.com/tonidev71" target="_blank" rel="noopener noreferrer" className="btn-social">
            Ver GitHub
          </a>
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Ampliado" className="lightbox-image" />
        </div>
      )}

    </div>
  );
};

export default Projects;