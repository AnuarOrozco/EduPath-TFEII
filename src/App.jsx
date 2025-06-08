import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contents from './pages/Contents';
import Roadmap from './pages/Roadmap';
import Simulators from './pages/Simulators';
// import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-[calc(100vh-160px)]">
        <Routes>
          {/* Ruta principal - Implementada */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta de Contenidos - Implementada */}
          <Route path="/contenidos" element={<Contents />} />
          
          {/* Ruta de Roadmap - Pendiente de implementación */}
          <Route path="/roadmap" element={<Roadmap />} />
          
          
          {/* Ruta de Simuladores - Pendiente de implementación */}
          <Route path="/simuladores" element={<Simulators />} />
          
          {/* Ruta de Perfil - Pendiente de implementación */}
          {/*
          <Route path="/perfil" element={<Profile />} />
          */}
          
          {/* Ruta de fallback para páginas no encontradas - Implementada */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
              <p className="text-xl text-gray-600">Página no encontrada</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;