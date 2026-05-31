'use client'

import { Check, Zap, Calendar, BookOpen, Rocket, Wrench, Brain } from 'lucide-react'

interface ServiceOption {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  highlighted?: boolean
}

export default function Services() {
  const services: ServiceOption[] = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para transformar tu negocio con herramientas digitales. Te guiamos en cada paso.',
      features: [
        'Diagnóstico de tu situación actual',
        'Recomendaciones tecnológicas personalizadas',
        'Análisis de costos y ROI',
        'Hoja de ruta clara y ejecutable',
        'Sesiones de acompañamiento',
        'Acceso a mi red de especialistas',
      ],
      highlighted: false,
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Acompañamiento de Proyectos IT',
      description: 'Te acompañamos durante toda la implementación. Desde la planificación hasta el lanzamiento y más allá.',
      features: [
        'Planificación y gestión de proyectos',
        'Supervisión técnica de desarrollo',
        'Resolución de bloqueos y riesgos',
        'Testing y calidad asegurada',
        'Capacitación de tu equipo',
        'Soporte post-implementación',
      ],
      highlighted: false,
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Páginas Web NoCode Personalizables',
      description: 'Sitios web actualizables sin saber código. Tú controlas cambios, contenido y diseño fácilmente.',
      features: [
        'Diseño moderno y responsive',
        'Editor NoCode intuitivo para ti',
        'Actualiza contenido sin programador',
        'SEO optimizado de base',
        'Integración con herramientas (CRM, email)',
        'Hosting y dominio configurado',
      ],
      highlighted: false,
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Montaje de Agentes IA',
      description: 'Agentes inteligentes que automatizan procesos y generan valor. Chatbots, automatización, análisis predictivo.',
      features: [
        'Chatbots conversacionales 24/7',
        'Automatización de procesos',
        'Análisis predictivo de datos',
        'Integración en sistemas existentes',
        'Entrenamiento con tus datos',
        'Monitoreo y mejora continua',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios <span className="text-gradient">Integral</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Desde consultoría estratégica hasta implementación y soporte. Cubrimos todo lo que tu negocio necesita para digitalizarse sin complicaciones.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 animate-fade-in-up ${
                service.highlighted
                  ? 'lg:col-span-1 bg-black border-2 border-black shadow-2xl shadow-black/20 scale-100'
                  : 'bg-gray-50 border border-gray-300 hover:border-black hover:bg-gray-50/80'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    RECOMENDADO
                  </div>
                </div>
              )}

              <div className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.highlighted
                    ? 'bg-white/20 text-white'
                    : 'bg-black/10 text-black'
                }`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-3 ${service.highlighted ? 'text-white' : 'text-black'}`}>{service.title}</h3>
                <p className={`text-sm mb-8 flex-grow ${service.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-3 ${service.highlighted ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          service.highlighted ? 'text-white' : 'text-black'
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/contacto"
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    service.highlighted
                      ? 'bg-white text-black hover:scale-105 hover:shadow-xl hover:shadow-white/30'
                      : 'bg-black text-white hover:bg-gray-800 border border-gray-300'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Sesión Gratis</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              ¿Por qué elegir PA TechLead?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div>
                <div className="text-black font-bold mb-2">✓ Precios Accesibles</div>
                <p className="text-gray-600 text-sm">Tecnología de calidad sin quebrar el banco</p>
              </div>
              <div>
                <div className="text-black font-bold mb-2">✓ Acompañamiento Real</div>
                <p className="text-gray-600 text-sm">No estás solo. Soporte directo en cada paso</p>
              </div>
              <div>
                <div className="text-black font-bold mb-2">✓ Innovación con IA</div>
                <p className="text-gray-600 text-sm">Agentes IA montados en tus sistemas y web</p>
              </div>
              <div>
                <div className="text-black font-bold mb-2">✓ Soluciones Integrales</div>
                <p className="text-gray-600 text-sm">De consultoría a implementación, todo cubierto</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto" className="btn-primary inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Agendar Sesión Gratuita</span>
              </a>
              <a
                href="https://wa.me/34XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 justify-center"
              >
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
