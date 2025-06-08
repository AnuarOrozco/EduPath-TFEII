import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Zap, BarChart2, Award, CheckCircle, ChevronRight } from 'lucide-react';

export default function Simulators() {
  const [activeTab, setActiveTab] = useState('simuladores');
  const [selectedSimulator, setSelectedSimulator] = useState(null);

  // Datos de los simuladores
  const simulators = {
    byArea: [
      {
        id: 'analisis',
        title: 'Análisis de Sistemas de Software',
        description: '31 preguntas - 45 minutos',
        icon: <BookOpen className="w-6 h-6 text-blue-600" />,
        questions: 31,
        time: 45,
        area: 'Disciplinar'
      },
      {
        id: 'diseno',
        title: 'Diseño de Sistemas de Software',
        description: '33 preguntas - 50 minutos',
        icon: <BookOpen className="w-6 h-6 text-purple-600" />,
        questions: 33,
        time: 50,
        area: 'Disciplinar'
      },
      {
        id: 'desarrollo',
        title: 'Desarrollo de Sistemas de Software',
        description: '49 preguntas - 70 minutos',
        icon: <BookOpen className="w-6 h-6 text-green-600" />,
        questions: 49,
        time: 70,
        area: 'Disciplinar'
      },
      {
        id: 'gestion',
        title: 'Gestión de Proyectos de Software',
        description: '30 preguntas - 45 minutos',
        icon: <BookOpen className="w-6 h-6 text-orange-600" />,
        questions: 30,
        time: 45,
        area: 'Disciplinar'
      },
      {
        id: 'lectura',
        title: 'Comprensión Lectora',
        description: '30 preguntas - 45 minutos',
        icon: <BookOpen className="w-6 h-6 text-red-600" />,
        questions: 30,
        time: 45,
        area: 'Transversal'
      },
      {
        id: 'redaccion',
        title: 'Redacción Indirecta',
        description: '30 preguntas - 45 minutos',
        icon: <BookOpen className="w-6 h-6 text-yellow-600" />,
        questions: 30,
        time: 45,
        area: 'Transversal'
      }
    ],
    fullExam: {
      id: 'completo',
      title: 'Examen Simulador Completo',
      description: '203 preguntas - 240 minutos',
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      questions: 203,
      time: 240,
      area: 'Todos los temas'
    },
    warmUp: {
      id: 'calentamiento',
      title: 'Modo Calentamiento Rápido',
      description: '10 preguntas aleatorias - Sin límite de tiempo',
      icon: <Zap className="w-6 h-6 text-pink-600" />,
      questions: 10,
      time: 'Libre',
      area: 'Todos los temas'
    }
  };

  // Datos de retroalimentación (ejemplo)
  const feedbackData = {
    areas: [
      { name: 'Análisis de Sistemas', score: 75, average: 68 },
      { name: 'Diseño de Sistemas', score: 82, average: 71 },
      { name: 'Desarrollo', score: 65, average: 63 },
      { name: 'Gestión de Proyectos', score: 90, average: 72 }
    ],
    strengths: [
      "Documentación de requerimientos",
      "Patrones de diseño arquitectónico",
      "Gestión de tiempos y costos"
    ],
    weaknesses: [
      "Técnicas de obtención de requerimientos",
      "Paradigmas de programación"
    ],
    recommendations: [
      {
        area: "Análisis de Sistemas",
        message: "Practica más técnicas de obtención de requerimientos",
        resource: "/contenidos/tecnicas-requerimientos"
      },
      {
        area: "Desarrollo",
        message: "Revisa los diferentes paradigmas de programación",
        resource: "/contenidos/paradigmas-programacion"
      }
    ]
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
          Simuladores de Examen
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Prepárate con exámenes cronometrados y recibe retroalimentación detallada
        </motion.p>
      </div>

      {/* Pestañas */}
      <motion.div 
        className="flex border-b border-gray-200 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'simuladores' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('simuladores')}
        >
          <Clock className="w-4 h-4 mr-2" />
          Simuladores
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'retroalimentacion' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('retroalimentacion')}
        >
          <BarChart2 className="w-4 h-4 mr-2" />
          Retroalimentación
        </button>
      </motion.div>

      {/* Contenido de pestañas */}
      <div className="min-h-[500px]">
        {activeTab === 'simuladores' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Examen completo y calentamiento */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      {simulators.fullExam.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{simulators.fullExam.title}</h3>
                      <p className="text-gray-600 mb-4">{simulators.fullExam.description}</p>
                      <motion.button
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedSimulator(simulators.fullExam)}
                      >
                        Comenzar simulador
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-full mr-4">
                      {simulators.warmUp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{simulators.warmUp.title}</h3>
                      <p className="text-gray-600 mb-4">{simulators.warmUp.description}</p>
                      <motion.button
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors flex items-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedSimulator(simulators.warmUp)}
                      >
                        Comenzar calentamiento
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Simuladores por área */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Simuladores por área de estudio</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {simulators.byArea.map((simulator, index) => (
                <motion.div
                  key={simulator.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className={`p-3 rounded-full mr-4 ${
                        simulator.area === 'Disciplinar' ? 'bg-blue-100' : 'bg-red-100'
                      }`}>
                        {simulator.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{simulator.title}</h3>
                        <p className="text-gray-600 mb-3">{simulator.description}</p>
                        <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                          simulator.area === 'Disciplinar' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'
                        }`}>
                          {simulator.area}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedSimulator(simulator)}
                    >
                      Comenzar simulador
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <BarChart2 className="text-blue-600 mr-2" /> Retroalimentación de tu último simulador
            </h2>

            {/* Resumen general */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resumen de desempeño</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 text-sm">Puntuación total</p>
                  <p className="text-3xl font-bold text-blue-600">78/100</p>
                  <p className="text-sm text-gray-500">Promedio: 68/100</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 text-sm">Tiempo empleado</p>
                  <p className="text-3xl font-bold text-blue-600">185 min</p>
                  <p className="text-sm text-gray-500">de 240 min disponibles</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 text-sm">Percentil estimado</p>
                  <p className="text-3xl font-bold text-blue-600">85%</p>
                  <p className="text-sm text-gray-500">Mejor que el 85% de los examinados</p>
                </div>
              </div>
            </div>

            {/* Desempeño por áreas */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Desempeño por áreas</h3>
              <div className="space-y-4">
                {feedbackData.areas.map((area, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{area.name}</span>
                      <span className="text-sm font-medium text-gray-700">{area.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-blue-600" 
                        style={{ width: `${area.score}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Promedio: {area.average}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fortalezas y debilidades */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="text-green-500 mr-2" /> Fortalezas
                </h3>
                <ul className="space-y-3">
                  {feedbackData.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Award className="text-yellow-500 mr-2" /> Áreas de oportunidad
                </h3>
                <ul className="space-y-3">
                  {feedbackData.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                        <Award className="w-4 h-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recomendaciones */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Award className="text-blue-500 mr-2" /> Recomendaciones de estudio
              </h3>
              <div className="space-y-4">
                {feedbackData.recommendations.map((rec, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4">
                    <p className="font-medium text-gray-800">{rec.area}</p>
                    <p className="text-gray-600 mb-2">{rec.message}</p>
                    <a 
                      href={rec.resource} 
                      className="text-blue-600 text-sm hover:underline flex items-center"
                    >
                      Ver contenido relacionado
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Modal para iniciar simulador */}
      {selectedSimulator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comenzar {selectedSimulator.title}</h3>
            <p className="text-gray-600 mb-6">{selectedSimulator.description}</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Número de preguntas:</span>
                <span className="font-medium">{selectedSimulator.questions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tiempo estimado:</span>
                <span className="font-medium">
                  {typeof selectedSimulator.time === 'number' 
                    ? `${selectedSimulator.time} minutos` 
                    : selectedSimulator.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Área:</span>
                <span className="font-medium">{selectedSimulator.area}</span>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setSelectedSimulator(null)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                onClick={() => {
                  // Aquí iría la lógica para iniciar el simulador
                  alert(`Iniciando ${selectedSimulator.title}`);
                  setSelectedSimulator(null);
                }}
              >
                Comenzar ahora
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}