import React from "react";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";

// Configuración de animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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

// Datos mejor estructurados
const reviews = [
  {
    stars: 5,
    text: "Gracias a EduPath pasé mi examen con excelente puntaje. Súper recomendado.",
    name: "Ana López",
    occupation: "Estudiante de Ingeniería",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    stars: 4,
    text: "Muy buena herramienta, los simuladores son bastante realistas.",
    name: "Carlos Pérez",
    occupation: "Recién egresado",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    stars: 5,
    text: "La mejor plataforma para preparación de exámenes que he usado.",
    name: "María González",
    occupation: "Estudiante de Medicina",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  }
];

const solutions = [
  {
    title: "Estudiantes",
    desc: "¿Tienes un examen pronto? Prepárate con simuladores diseñados para mejorar tus habilidades y confianza.",
    icon: "🎓",
    color: "bg-blue-50"
  },
  {
    title: "Instituciones Educativas",
    desc: "Crea exámenes personalizados para evaluar el conocimiento y progreso de tus estudiantes.",
    icon: "🏫",
    color: "bg-purple-50"
  },
  {
    title: "Empresas",
    desc: "Capacita a tu equipo con soluciones adaptadas para mejorar el rendimiento profesional.",
    icon: "🏢",
    color: "bg-green-50"
  },
  {
    title: "Equipos de RRHH",
    desc: "Optimiza tus procesos de selección con evaluaciones inteligentes y precisas.",
    icon: "👔",
    color: "bg-amber-50"
  }
];

const features = [
  "Contenidos oficiales del EGEL Plus ISOFT",
  "Diferentes tipos de preguntas y dificultades",
  "Simuladores reales",
  "Feedback para reforzar contenidos",
  "Ruta de aprendizaje completa"
];

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/UNAM_logo.svg/512px-UNAM_logo.svg.png",
    alt: "UNAM"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Logo_IPN.png/600px-Logo_IPN.png",
    alt: "IPN"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tec_de_Monterrey_logo.svg/512px-Tec_de_Monterrey_logo.svg.png",
    alt: "Tec de Monterrey"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section - Mejorada con animación y gradiente */}
      <section className="relative w-full h-screen bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Domina tus exámenes con <span className="text-blue-300">simuladores reales</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex justify-center items-center gap-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl text-white/90">4.8/5 (1,000+ reseñas)</span>
            </motion.div>
            
            <motion.ul variants={containerVariants} className="space-y-3 text-lg text-white/90 max-w-xl mx-auto">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-green-400" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex gap-4 justify-center"
            >
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
                Comenzar ahora
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium transition-all hover:bg-white/10">
                Ver demostración
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Efecto de partículas sutiles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 10 + 2,
                height: Math.random() * 10 + 2
              }}
              animate={{
                y: [0, 100],
                opacity: [0.1, 0.5, 0],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
            />
          ))}
        </div>
      </section>

      {/* Soluciones - Rediseño con cards animadas */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4">
            Soluciones para cada necesidad
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
            Adaptamos nuestra plataforma para satisfacer los requerimientos específicos de cada tipo de usuario
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutions.map(({ title, desc, icon, color }, index) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`${color} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reseñas - Carrusel mejorado */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-4">Testimonios reales</h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
              Descubre lo que nuestros usuarios dicen sobre su experiencia
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.6 }}
                  className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl p-8 shadow-md flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-full object-cover" 
                    />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.occupation}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-gray-700 mb-6">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logos - Animación de aparición */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto px-6"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-bold text-center mb-4">
            Instituciones que confían en nosotros
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-gray-500 mb-12">
            Colaboramos con las mejores instituciones educativas del país
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo, idx) => (
              <motion.div
                key={logo.alt}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="p-4 bg-gray-50 rounded-lg"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-6">
            ¿Listo para mejorar tus resultados?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-white/90 mb-8">
            Regístrate ahora y obtén acceso inmediato a todos nuestros recursos
          </motion.p>
          <motion.div variants={itemVariants}>
            <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all hover:shadow-2xl">
              Comenzar prueba gratuita
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}