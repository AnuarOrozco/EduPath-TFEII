import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, FileText, BarChart2, Clock, Award, CheckCircle } from "lucide-react";

export default function Contents() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Animaciones
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

  // Datos estructurados del examen
  const examData = {
    general: {
      title: "Consideraciones Generales",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "Evaluación estandarizada de alta calidad",
        "Objetivo: Determinar nivel de desempeño de egresados",
        "Población objetivo: Egresados de Ingeniería de Software",
        "Tipo de evaluación: Sumativa de egreso",
        "Duración: 8 horas (2 sesiones de 4 horas)"
      ]
    },
    structure: {
      title: "Estructura del Examen",
      icon: <BookOpen className="w-5 h-5" />,
      sections: [
        {
          name: "Sección Disciplinar",
          description: "Evalúa conocimientos específicos de Ingeniería de Software",
          areas: [
            {
              name: "Análisis de Sistemas de Software",
              topics: [
                "Tipos de requerimientos",
                "Técnicas para obtención y análisis de requerimientos",
                "Documentación de requerimientos"
              ],
              reactives: 31
            },
            {
              name: "Diseño de Sistemas de Software",
              topics: [
                "Diseño arquitectónico",
                "Diseño de módulos y componentes",
                "Diseño de interfaces"
              ],
              reactives: 33
            },
            {
              name: "Desarrollo de Sistemas de Software",
              topics: [
                "Lenguajes de desarrollo",
                "Paradigmas de programación",
                "Gestión de datos"
              ],
              reactives: 49
            },
            {
              name: "Gestión de Proyectos de Software",
              topics: [
                "Gestión de tiempos y costos",
                "Calidad de software",
                "Metodologías de desarrollo"
              ],
              reactives: 30
            }
          ],
          totalReactives: 143
        },
        {
          name: "Sección de Lenguaje y Comunicación",
          description: "Evalúa habilidades transversales",
          areas: [
            {
              name: "Comprensión Lectora",
              topics: [
                "Identificación de información",
                "Interpretación",
                "Evaluación de forma y contenido"
              ],
              reactives: 30
            },
            {
              name: "Redacción Indirecta",
              topics: [
                "Dimensión comunicativa",
                "Dimensión gramatical y semántica",
                "Dimensión ortográfica"
              ],
              reactives: 30
            }
          ],
          totalReactives: 60
        }
      ]
    },
    performance: {
      title: "Niveles de Desempeño",
      icon: <BarChart2 className="w-5 h-5" />,
      levels: [
        {
          name: "Aún no satisfactorio",
          range: "700-999 puntos",
          description: "No alcanza los conocimientos y habilidades mínimas esperadas"
        },
        {
          name: "Satisfactorio",
          range: "1000-1149 puntos",
          description: "Demuestra dominio de los conocimientos y habilidades básicas"
        },
        {
          name: "Sobresaliente",
          range: "1150-1300 puntos",
          description: "Muestra excelente dominio de los contenidos evaluados"
        }
      ]
    },
    preparation: {
      title: "Recomendaciones",
      icon: <CheckCircle className="w-5 h-5" />,
      tips: [
        "Organiza un plan de estudio basado en las áreas del examen",
        "Revisa la bibliografía sugerida en la guía oficial",
        "Practica con exámenes simulados",
        "Administra bien tu tiempo durante el examen",
        "Descansa bien antes del día del examen"
      ]
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contenidos del EGEL Plus ISOFT</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Información detallada sobre la estructura, contenidos y características del Examen General para el Egreso de la Licenciatura en Ingeniería de Software
        </p>
      </motion.div>

      {/* Sección de características generales */}
      <motion.div variants={itemVariants} className="mb-12">
        <div 
          className="flex items-center justify-between bg-blue-50 rounded-lg p-6 cursor-pointer"
          onClick={() => toggleSection('general')}
        >
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              {examData.general.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">{examData.general.title}</h2>
          </div>
          {activeSection === 'general' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
        
        {activeSection === 'general' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-b-lg shadow-md p-6 border-t border-gray-200"
          >
            <ul className="space-y-3">
              {examData.general.content.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>

      {/* Sección de estructura del examen */}
      <motion.div variants={itemVariants} className="mb-12">
        <div 
          className="flex items-center justify-between bg-purple-50 rounded-lg p-6 cursor-pointer"
          onClick={() => toggleSection('structure')}
        >
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              {examData.structure.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">{examData.structure.title}</h2>
          </div>
          {activeSection === 'structure' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
        
        {activeSection === 'structure' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-b-lg shadow-md p-6 border-t border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {examData.structure.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.name}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Áreas evaluadas:</h4>
                    <div className="space-y-4">
                      {section.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="border-l-2 border-purple-300 pl-4">
                          <div className="flex justify-between items-start">
                            <h5 className="font-medium text-gray-800">{area.name}</h5>
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                              {area.reactives} reactivos
                            </span>
                          </div>
                          <ul className="mt-2 space-y-1">
                            {area.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-sm text-gray-600 flex items-start">
                                <span className="text-purple-500 mr-1">•</span> {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-purple-800 font-medium">
                      Total de reactivos: <span className="font-bold">{section.totalReactives}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Total general del examen:</h4>
              <p className="text-blue-700">
                {examData.structure.sections.reduce((acc, section) => acc + section.totalReactives, 0)} reactivos
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Sección de niveles de desempeño */}
      <motion.div variants={itemVariants} className="mb-12">
        <div 
          className="flex items-center justify-between bg-green-50 rounded-lg p-6 cursor-pointer"
          onClick={() => toggleSection('performance')}
        >
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              {examData.performance.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">{examData.performance.title}</h2>
          </div>
          {activeSection === 'performance' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
        
        {activeSection === 'performance' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-b-lg shadow-md p-6 border-t border-gray-200"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {examData.performance.levels.map((level, index) => (
                <div key={index} className={`border rounded-lg p-6 ${
                  level.name === "Sobresaliente" ? "border-yellow-300 bg-yellow-50" : 
                  level.name === "Satisfactorio" ? "border-green-300 bg-green-50" : 
                  "border-gray-300 bg-gray-50"
                }`}>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{level.name}</h3>
                  <p className={`text-sm font-medium mb-3 ${
                    level.name === "Sobresaliente" ? "text-yellow-700" : 
                    level.name === "Satisfactorio" ? "text-green-700" : 
                    "text-gray-700"
                  }`}>
                    {level.range}
                  </p>
                  <p className="text-gray-600">{level.description}</p>
                  
                  {level.name === "Sobresaliente" && (
                    <div className="mt-4 bg-yellow-100 rounded-lg p-2">
                      <p className="text-yellow-800 text-sm font-medium">
                        <Award className="inline mr-1 w-4 h-4" /> Candidato al Premio Ceneval al Desempeño de Excelencia
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Sección de recomendaciones */}
      <motion.div variants={itemVariants}>
        <div 
          className="flex items-center justify-between bg-orange-50 rounded-lg p-6 cursor-pointer"
          onClick={() => toggleSection('preparation')}
        >
          <div className="flex items-center">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              {examData.preparation.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">{examData.preparation.title}</h2>
          </div>
          {activeSection === 'preparation' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
        
        {activeSection === 'preparation' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-b-lg shadow-md p-6 border-t border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Estrategias de preparación</h3>
                <ul className="space-y-3">
                  {examData.preparation.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Distribución del tiempo</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Clock className="text-blue-600 mr-2" />
                    <span className="font-medium">Duración total: 8 horas</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Sesión 1 (Mañana)</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">4 horas</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Sesión 2 (Tarde)</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">4 horas</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-yellow-50 rounded-lg p-3">
                    <p className="text-yellow-800 text-sm">
                      El examen incluye 15% de reactivos piloto que no se consideran para la calificación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* CTA para descargar guía completa */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white"
      >
        <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
        <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
          Descarga la guía completa del EGEL Plus ISOFT con todos los detalles sobre los contenidos evaluados, ejemplos de reactivos y recomendaciones adicionales.
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
          Descargar Guía Completa (PDF)
        </button>
      </motion.div>
    </motion.div>
  );
}