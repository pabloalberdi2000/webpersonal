'use client'

import { ArrowRight, BookOpen, Rocket, Brain } from 'lucide-react'
import Link from 'next/link'

export default function Overview() {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para transformar tu negocio con herramientas digitales.',
      link: '/servicios',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Acompañamiento IT',
      description: 'Supervisión técnica desde la planificación hasta el lanzamiento y más allá.',
      link: '/servicios',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Agentes IA',
      description: 'Automatización inteligente, chatbots 24/7 y análisis predictivo.',
      link: '/agentes-ia',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Qué <span className="text-gradient">Hacemos?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tres servicios integrales para transformar tu negocio digitalmente. Desde la estrategia hasta la ejecución.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group p-8 rounded-2xl bg-white border border-gray-300 hover:border-black hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-black/10 flex items-center justify-center mb-4 text-black group-hover:bg-black/20 transition-all">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-black font-semibold group-hover:translate-x-2 transition-transform">
                <span>Ver más</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-black rounded-2xl p-12 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black mb-2">4+</div>
              <p className="text-gray-300">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">50+</div>
              <p className="text-gray-300">Proyectos Completados</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">100%</div>
              <p className="text-gray-300">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
