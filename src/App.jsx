import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer'; // Importa el Footer
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-[calc(100vh-160px)]"> {/* Asegura que el main ocupe el espacio restante */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Añade estas rutas cuando crees los componentes */}
          {/* <Route path="/contenidos" element={<Contents />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/simuladores" element={<Simulators />} />
          <Route path="/perfil" element={<Profile />} /> */}
        </Routes>
      </main>
      <Footer /> {/* Añade el Footer aquí */}
    </Router>
  );
}

export default App;