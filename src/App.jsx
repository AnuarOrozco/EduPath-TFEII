import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header'; // Importa el Header
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header /> {/* Añade el Header aquí */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Añade estas rutas cuando crees los componentes */}
          {/* <Route path="/contenidos" element={<Contents />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/simuladores" element={<Simulators />} />
          <Route path="/perfil" element={<Profile />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;