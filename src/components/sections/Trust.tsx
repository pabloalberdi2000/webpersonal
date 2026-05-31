'use client'

import { Check } from 'lucide-react'

export default function Trust() {
  const features = [
    {
      title: 'Misión Clara',
      description: 'Nacimos para apoyar emprendedores jóvenes. Tu éxito es el nuestro.',
    },
    {
      title: 'Precios Accesibles',
      description: 'Sin presupuestos disparados. Tecnología de calidad a precios que puedas pagar.',
    },
    {
      title: 'Tecnología Premium',
      description: 'Next.js, React, IA moderna. Las mismas herramientas de Silicon Valley.',
    },
    {
      title: 'Sin Intermediarios',
      description: 'Hablas directamente con nosotros. Decisiones rápidas, acompañamiento real.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Por qué <span className="text-gradient">Confiar</span> en PA TechLead?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Somos diferentes. No somos una agencia costosa. Somos tu socio en el crecimiento.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-300 hover:border-black hover:bg-gray-100 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">
                  <Check className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Listo para transformar tu negocio?
          </p>
          <a
            href="/contacto"
            className="inline-block btn-primary"
          >
            Agendar Sesión Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
