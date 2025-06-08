import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaChalkboardTeacher, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// animationsss
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Home = () => {
  return (
    <motion.div
      className="min-h-screen p-6 md:p-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section className="max-w-4xl mx-auto text-center mb-16" variants={itemVariants}>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text)]"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Domina el <span className="text-[var(--color-primary)]">EGEL PLUS-ISOFT</span> con EduPath
        </motion.h1>
        <motion.p className="text-xl text-[var(--color-text-light)] mb-8" variants={itemVariants}>
          La plataforma definitiva para prepararte con contenido estructurado, simuladores realistas y seguimiento de progreso.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link 
            to="/roadmap" 
            className="button-primary inline-flex items-center gap-2"
          >
            Comenzar ahora <FaArrowRight />
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        variants={containerVariants}
      >
        {/* Card1 */}
        <motion.div 
          className="card hover:shadow-lg transition-shadow"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="text-[var(--color-primary)] text-4xl mb-4">
            <FaBookOpen />
          </div>
          <h3 className="text-xl font-semibold mb-2">Contenido CENEVAL</h3>
          <p className="text-[var(--color-text-light)]">
            Accede al temario oficial organizado en rutas de aprendizaje claras y progresivas.
          </p>
        </motion.div>

        {/* Card2 */}
        <motion.div 
          className="card hover:shadow-lg transition-shadow"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="text-[var(--color-primary)] text-4xl mb-4">
            <FaChalkboardTeacher />
          </div>
          <h3 className="text-xl font-semibold mb-2">Simuladores Realistas</h3>
          <p className="text-[var(--color-text-light)]">
            Practica con exámenes que replican el formato y dificultad del EGEL PLUS.
          </p>
        </motion.div>

        {/* Card3 */}
        <motion.div 
          className="card hover:shadow-lg transition-shadow"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="text-[var(--color-primary)] text-4xl mb-4">
            <FaChartLine />
          </div>
          <h3 className="text-xl font-semibold mb-2">Seguimiento Inteligente</h3>
          <p className="text-[var(--color-text-light)]">
            Identifica tus fortalezas y debilidades con análisis detallados.
          </p>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-[var(--color-primary)] text-white rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center"
        variants={itemVariants}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="mb-6 opacity-90">
          Regístrate gratis y accede a todo el contenido de preparación.
        </p>
        <Link 
          to="/registro" 
          className="button-secondary inline-flex items-center gap-2 bg-white text-[var(--color-primary)] hover:text-white"
        >
          Crear cuenta <FaArrowRight />
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default Home;