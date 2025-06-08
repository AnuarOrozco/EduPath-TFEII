import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, ChevronDown, ChevronUp, Clock, BarChart2, Award } from 'lucide-react';

export default function Roadmap() {
  const [activeSection, setActiveSection] = useState(null);
  const [progress, setProgress] = useState({
    analisis: 0,
    diseño: 0,
    desarrollo: 0,
    gestion: 0,
    lectura: 0,
    redaccion: 0
  });
  const [completedTopics, setCompletedTopics] = useState({});
  const [quizState, setQuizState] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  // Datos del roadmap
  const examStructure = {
    disciplinar: {
      title: "Sección Disciplinar",
      description: "Evalúa conocimientos específicos de Ingeniería de Software",
      icon: <BookOpen className="w-5 h-5" />,
      areas: [
        {
          name: "Análisis de Sistemas de Software",
          reactivos: 31,
          topics: [
            {
              name: "Tipos de requerimientos",
              path: "/contenidos/tipos-requerimientos"
            },
            {
              name: "Técnicas para obtención y análisis de requerimientos",
              path: "/contenidos/tecnicas-requerimientos"
            },
            {
              name: "Documentación de requerimientos",
              path: "/contenidos/documentacion-requerimientos"
            }
          ],
          quiz: {
            path: "/quiz/analisis-sistemas",
            questions: 5
          }
        },
        {
          name: "Diseño de Sistemas de Software",
          reactivos: 33,
          topics: [
            {
              name: "Diseño arquitectónico",
              path: "/contenidos/diseno-arquitectonico"
            },
            {
              name: "Diseño de módulos y componentes",
              path: "/contenidos/modulos-componentes"
            },
            {
              name: "Diseño de interfaces",
              path: "/contenidos/diseno-interfaces"
            }
          ],
          quiz: {
            path: "/quiz/diseno-sistemas",
            questions: 5
          }
        },
        {
          name: "Desarrollo de Sistemas de Software",
          reactivos: 49,
          topics: [
            {
              name: "Lenguajes de desarrollo",
              path: "/contenidos/lenguajes-desarrollo"
            },
            {
              name: "Paradigmas de programación",
              path: "/contenidos/paradigmas-programacion"
            },
            {
              name: "Gestión de datos",
              path: "/contenidos/gestion-datos"
            }
          ],
          quiz: {
            path: "/quiz/desarrollo-sistemas",
            questions: 5
          }
        },
        {
          name: "Gestión de Proyectos de Software",
          reactivos: 30,
          topics: [
            {
              name: "Gestión de tiempos y costos",
              path: "/contenidos/gestion-tiempos-costos"
            },
            {
              name: "Calidad de software",
              path: "/contenidos/calidad-software"
            },
            {
              name: "Metodologías de desarrollo",
              path: "/contenidos/metodologias-desarrollo"
            }
          ],
          quiz: {
            path: "/quiz/gestion-proyectos",
            questions: 5
          }
        }
      ],
      totalReactivos: 143
    },
    transversal: {
      title: "Sección de Lenguaje y Comunicación",
      description: "Evalúa habilidades transversales",
      icon: <BookOpen className="w-5 h-5" />,
      areas: [
        {
          name: "Comprensión Lectora",
          reactivos: 30,
          topics: [
            {
              name: "Identificación de información",
              path: "/contenidos/identificacion-informacion"
            },
            {
              name: "Interpretación",
              path: "/contenidos/interpretacion"
            },
            {
              name: "Evaluación de forma y contenido",
              path: "/contenidos/evaluacion-contenido"
            }
          ],
          quiz: {
            path: "/quiz/comprension-lectora",
            questions: 5
          }
        },
        {
          name: "Redacción Indirecta",
          reactivos: 30,
          topics: [
            {
              name: "Dimensión comunicativa",
              path: "/contenidos/dimension-comunicativa"
            },
            {
              name: "Dimensión gramatical y semántica",
              path: "/contenidos/gramatica-semantica"
            },
            {
              name: "Dimensión ortográfica",
              path: "/contenidos/ortografia"
            }
          ],
          quiz: {
            path: "/quiz/redaccion-indirecta",
            questions: 5
          }
        }
      ],
      totalReactivos: 60
    }
  };

  // Calcular progreso total
  const totalProgress = Math.round(
    (progress.analisis + progress.diseño + progress.desarrollo + progress.gestion + 
     progress.lectura + progress.redaccion) / 6
  );

  // Generar recomendaciones basadas en progreso
  useEffect(() => {
    const newRecommendations = [];
    
    if (progress.analisis < 50) {
      newRecommendations.push({
        area: "Análisis de Sistemas",
        message: "Focaliza en practicar técnicas de obtención de requerimientos",
        resource: "/contenidos#analisis"
      });
    }
    
    if (progress.diseño < 30) {
      newRecommendations.push({
        area: "Diseño de Sistemas",
        message: "Revisa patrones de diseño arquitectónico",
        resource: "/contenidos#diseno"
      });
    }
    
    // Agregar más condiciones según sea necesario...
    
    setRecommendations(newRecommendations);
  }, [progress]);

  // Manejar completado de tema
  const handleCompleteTopic = (areaName, topicName) => {
    const topicId = `${areaName}-${topicName}`;
    setCompletedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
    
    // Actualizar progreso del área
    const areaKey = areaName.toLowerCase().split(' ')[0];
    const areaTopics = examStructure.disciplinar.areas.concat(examStructure.transversal.areas)
      .find(a => a.name === areaName)?.topics || [];
    
    const completedCount = areaTopics.filter(t => completedTopics[`${areaName}-${t.name}`] || 
      (topicId === `${areaName}-${t.name}` && !completedTopics[topicId])).length;
    const newProgress = Math.round((completedCount / areaTopics.length) * 100);
    
    setProgress(prev => ({
      ...prev,
      [areaKey]: newProgress
    }));
  };

  // Manejar completado de sección
  const handleCompleteSection = (section) => {
    setProgress(prev => ({
      ...prev,
      [section]: 100
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
      {/* Encabezado */}
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Roadmap de Estudio
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Planifica tu preparación para el EGEL Plus ISOFT
        </motion.p>
      </div>

      {/* Barra de progreso general */}
      <motion.div 
        className="mb-12 bg-white rounded-xl shadow-md p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-800">Progreso general</h3>
          <span className="text-lg font-bold text-blue-600">{totalProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <motion.div 
            className="bg-blue-600 h-4 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${totalProgress}%` }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Timeline de secciones */}
      <div className="space-y-16">
        {/* Sección Disciplinar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="flex items-center justify-between bg-blue-50 rounded-lg p-6 cursor-pointer"
            onClick={() => setActiveSection(activeSection === 'disciplinar' ? null : 'disciplinar')}
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                {examStructure.disciplinar.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{examStructure.disciplinar.title}</h2>
                <p className="text-gray-600">{examStructure.disciplinar.description}</p>
              </div>
            </div>
            {activeSection === 'disciplinar' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>

          {activeSection === 'disciplinar' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-b-lg shadow-md p-6 border-t border-gray-200"
            >
              <div className="space-y-8">
                {examStructure.disciplinar.areas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-blue-500 pl-6 relative pb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Punto del timeline */}
                    <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3 top-0 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{area.name}</h3>
                        <p className="text-gray-600 mb-2">{area.reactivos} reactivos</p>
                        
                        {/* Temas como botones */}
                        <div className="space-y-2 mt-4">
                          {area.topics.map((topic, i) => (
                            <div key={i} className="flex items-center">
                              <motion.a
                                href={topic.path}
                                className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                              >
                                {topic.name}
                              </motion.a>
                              <button
                                onClick={() => handleCompleteTopic(area.name, topic.name)}
                                className="ml-2 p-2 text-gray-400 hover:text-green-500 transition-colors"
                                aria-label="Marcar como completado"
                              >
                                <CheckCircle 
                                  className={`w-5 h-5 ${completedTopics[`${area.name}-${topic.name}`] ? 'text-green-500 fill-green-100' : ''}`} 
                                />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Barra de progreso individual */}
                      <div className="w-32">
                        <div className="h-2 bg-gray-200 rounded-full mb-1">
                          <div 
                            className="h-2 rounded-full bg-green-500" 
                            style={{ width: `${progress[area.name.toLowerCase().split(' ')[0]]}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 text-right">
                          {progress[area.name.toLowerCase().split(' ')[0]]}% completado
                        </p>
                      </div>
                    </div>

                    {/* Botón del Quiz */}
                    {area.quiz && (
                      <motion.a
                        href={area.quiz.path}
                        className="inline-flex items-center mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <BarChart2 className="w-4 h-4 mr-2" />
                        Realizar Quiz ({area.quiz.questions} preguntas)
                      </motion.a>
                    )}

                    {/* Botón de completado */}
                    <motion.button
                      className="mt-4 ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCompleteSection(area.name.toLowerCase().split(' ')[0])}
                    >
                      Marcar sección como completada
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Sección Transversal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            className="flex items-center justify-between bg-purple-50 rounded-lg p-6 cursor-pointer"
            onClick={() => setActiveSection(activeSection === 'transversal' ? null : 'transversal')}
          >
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                {examStructure.transversal.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{examStructure.transversal.title}</h2>
                <p className="text-gray-600">{examStructure.transversal.description}</p>
              </div>
            </div>
            {activeSection === 'transversal' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>

          {activeSection === 'transversal' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-b-lg shadow-md p-6 border-t border-gray-200"
            >
              <div className="space-y-8">
                {examStructure.transversal.areas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-purple-500 pl-6 relative pb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Punto del timeline */}
                    <div className="absolute w-6 h-6 bg-purple-500 rounded-full -left-3 top-0 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{area.name}</h3>
                        <p className="text-gray-600 mb-2">{area.reactivos} reactivos</p>
                        
                        {/* Temas como botones */}
                        <div className="space-y-2 mt-4">
                          {area.topics.map((topic, i) => (
                            <div key={i} className="flex items-center">
                              <motion.a
                                href={topic.path}
                                className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                              >
                                {topic.name}
                              </motion.a>
                              <button
                                onClick={() => handleCompleteTopic(area.name, topic.name)}
                                className="ml-2 p-2 text-gray-400 hover:text-green-500 transition-colors"
                                aria-label="Marcar como completado"
                              >
                                <CheckCircle 
                                  className={`w-5 h-5 ${completedTopics[`${area.name}-${topic.name}`] ? 'text-green-500 fill-green-100' : ''}`} 
                                />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Barra de progreso individual */}
                      <div className="w-32">
                        <div className="h-2 bg-gray-200 rounded-full mb-1">
                          <div 
                            className="h-2 rounded-full bg-green-500" 
                            style={{ width: `${progress[area.name.toLowerCase().split(' ')[0]]}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 text-right">
                          {progress[area.name.toLowerCase().split(' ')[0]]}% completado
                        </p>
                      </div>
                    </div>

                    {/* Botón del Quiz */}
                    {area.quiz && (
                      <motion.a
                        href={area.quiz.path}
                        className="inline-flex items-center mt-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <BarChart2 className="w-4 h-4 mr-2" />
                        Realizar Quiz ({area.quiz.questions} preguntas)
                      </motion.a>
                    )}

                    {/* Botón de completado */}
                    <motion.button
                      className="mt-4 ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCompleteSection(area.name.toLowerCase().split(' ')[0])}
                    >
                      Marcar sección como completada
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Recomendaciones personalizadas */}
      {recommendations.length > 0 && (
        <motion.div 
          className="mt-16 bg-yellow-50 rounded-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Award className="text-yellow-600 mr-2" /> Recomendaciones de estudio
          </h3>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                  <CheckCircle className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{rec.area}</p>
                  <p className="text-gray-600">{rec.message}</p>
                  <a 
                    href={rec.resource} 
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Ver contenido relacionado
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Resumen de progreso */}
      <motion.div 
        className="mt-12 bg-white rounded-xl shadow-md p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Resumen de progreso</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Sección Disciplinar</h4>
            <div className="space-y-4">
              {examStructure.disciplinar.areas.map((area, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{area.name}</span>
                    <span className="text-sm text-gray-500">
                      {progress[area.name.toLowerCase().split(' ')[0]]}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${progress[area.name.toLowerCase().split(' ')[0]]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Sección Transversal</h4>
            <div className="space-y-4">
              {examStructure.transversal.areas.map((area, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{area.name}</span>
                    <span className="text-sm text-gray-500">
                      {progress[area.name.toLowerCase().split(' ')[0]]}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${progress[area.name.toLowerCase().split(' ')[0]]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}