import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

export default function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="bg-gray-900 text-white pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Logo y descripción */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">EduPath</h3>
            <p className="text-gray-400 mb-6">
              La plataforma líder en preparación de exámenes profesionales con simuladores reales.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <motion.ul variants={containerVariants} className="space-y-3">
              {[
                { text: "Inicio", href: "#" },
                { text: "Contenidos", href: "#" },
                { text: "Roadmap", href: "#" },
                { text: "Simuladores", href: "#" },
                { text: "Precios", href: "#" }
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Columna 3: Recursos */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Recursos</h4>
            <motion.ul variants={containerVariants} className="space-y-3">
              {[
                { text: "Blog", href: "#" },
                { text: "Guías de estudio", href: "#" },
                { text: "Preguntas frecuentes", href: "#" },
                { text: "Centro de ayuda", href: "#" },
                { text: "Tutoriales", href: "#" }
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Columna 4: Contacto */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <motion.ul variants={containerVariants} className="space-y-4">
              {[
                { icon: Mail, text: "contacto@edupath.com" },
                { icon: Phone, text: "+52 55 1234 5678" },
                { icon: MapPin, text: "Ciudad de México, MX" }
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <item.icon className="w-5 h-5 mt-0.5 text-blue-300 flex-shrink-0" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          variants={fadeIn}
          className="border-t border-gray-800 my-8"
        />

        {/* Copyright y enlaces legales */}
        <motion.div 
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p variants={itemVariants} className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EduPath. Todos los derechos reservados.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex space-x-6">
            {[
              { text: "Términos", href: "#" },
              { text: "Privacidad", href: "#" },
              { text: "Cookies", href: "#" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-blue-300 text-sm transition-colors"
              >
                {link.text}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}