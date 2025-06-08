import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();

  return (
    <motion.div 
      className="header-container"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <header>
        <nav>
          <ul>
            <NavItem path="/" text="Inicio" currentPath={location.pathname} />
            <NavItem path="/contenidos" text="Contenidos" currentPath={location.pathname} />
            <NavItem path="/roadmap" text="Ruta de Aprendizaje" currentPath={location.pathname} />
            <NavItem path="/simuladores" text="Simuladores" currentPath={location.pathname} />
            <NavItem path="/perfil" text="Mi Perfil" currentPath={location.pathname} />
          </ul>
        </nav>
      </header>
    </motion.div>
  );
};

const NavItem = ({ path, text, currentPath }) => (
  <li>
    <Link
      to={path}
      className={currentPath === path ? 'active' : ''}
    >
      {text}
    </Link>
  </li>
);

export default Header;