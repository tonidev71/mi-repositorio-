// src/App.jsx
import Hero from './components/Hero'; 
import Projects from './components/Projects';
import Contact from './components/Contact'; // <--- ESTA LÍNEA ES LA QUE FALTA
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Contact /> {/* Ahora React ya sabe qué es esto gracias al import */}
      <Footer />
    </div>
  );
}

export default App;