// src/components/Contact.jsx
import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="contact-container">
      <h2 className="section-title">Hablemos</h2>
      <div className="card">
        <div className="card-content">
          <form action="https://formspree.io/f/TU_ID_DE_FORMSPREE" method="POST" className="contact-form">
            <label>Nombre</label>
            <input type="text" name="name" required placeholder="Tu nombre" />
            
            <label>Email</label>
            <input type="email" name="email" required placeholder="tu@email.com" />
            
            <label>Mensaje</label>
            <textarea name="message" required placeholder="¿En qué podemos colaborar?" rows="5"></textarea>
            
            <button type="submit" className="btn-project">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;