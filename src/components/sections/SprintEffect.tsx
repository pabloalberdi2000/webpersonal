'use client'

import { Users, BarChart3, Zap, Headphones } from 'lucide-react'

interface BenefitCard {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
}

export default function SprintEffect() {
  const benefits: BenefitCard[] = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Asesoramiento Experto',
      description: '4+ años de experiencia en transformación digital. Te guiamos con decisiones que funcionan.',
      details: [
        'Análisis profundo de tu negocio',
        'Recomendaciones basadas en casos reales',
        'Acceso a red de especialistas',
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Resultados Medibles',
      description: 'No es magia: planificamos, ejecutamos y verificamos. Ves el impacto en tu negocio.',
      details: [
        'Definimos KPIs claros desde inicio',
        'Reportes de progreso regulares',
        'Ajustes continuos según resultados',
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Herramientas Modernas & Accesibles',
      description: 'NoCode, low-code y soluciones personalizadas. Tecnología sin complejidad innecesaria.',
      details: [
        'Plataformas intuitivas y escalables',
        'Tú actualizas sin saber programar',
        'Integraciones automáticas y seguras',
      ],
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Soporte & Acompañamiento',
      description: 'No quedas solo. Soporte directo, respuesta rápida y acompañamiento continuo.',
      details: [
        'Consultas sin límite durante proyecto',
        'Sesiones de capacitación incluidas',
        'Soporte post-lanzamiento garantizado',
      ],
    },
  ]

  return (
    <section id="sprint" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por qué <span className="text-gradient">PA TechLead</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experiencia, herramientas modernas, precios accesibles y acompañamiento real. Todo lo que necesitas para que tu transformación digital sea exitosa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gray-50/40 border border-gray-300/50 hover:border-black/50 transition-all duration-300 hover:bg-gray-50/60 hover:shadow-2xl hover:shadow-lime-400/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-black/10 text-black group-hover:bg-black/20 group-hover:text-gray-700 transition-all duration-300">
                {benefit.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {benefit.description}
              </p>

              {/* Details */}
              <ul className="space-y-3">
                {benefit.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-black font-bold mt-1">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            ¿Listo para transformar tu negocio?
          </p>
          <a href="/contacto" className="btn-primary inline-flex items-center gap-2">
            <span>Agendar Sesión Gratuita</span>
            <Zap className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
