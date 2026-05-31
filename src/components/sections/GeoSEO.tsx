'use client'

import { MapPin, TrendingUp, Users, Globe } from 'lucide-react'

interface BenefitItem {
  icon: React.ReactNode
  title: string
  description: string
}

export default function GeoSEO() {
  const benefits: BenefitItem[] = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Domina Tu Mercado Local',
      description: 'Aparecer en la primera página de Google en [Tu Ciudad] cuando clientes buscan tus servicios. SEO local es poder.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Aumenta Visitas Orgánicas',
      description: 'Más tráfico sin gastar en publicidad. Clientes potenciales encuentran tu negocio naturalmente en Google.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Genera Confianza',
      description: 'Aparecer arriba en Google aumenta credibilidad. 80% de los clientes buscan en Google antes de comprar.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Atrae Clientes Locales',
      description: 'SEO local te conecta con gente en [Tu Ciudad] que REALMENTE necesita lo que ofreces, lista para convertir.',
    },
  ]

  return (
    <section id="seo-local" className="section-padding bg-gradient-to-b from-slate-800/50 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Consultoría Digital para <span className="text-gradient">Tu Negocio</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              No necesitas una agencia cara de 50 personas. Necesitas alguien que entienda TU negocio, que sepa qué tecnologías realmente funcionan, y que te acompañe en cada paso sin vender humo.
            </p>

            <div className="bg-gray-50/50 border-l-4 border-black p-6 rounded-lg mb-8">
              <p className="text-slate-200 font-semibold">
                Consultoría + Implementación + Soporte = Tu transformación digital sin complicaciones.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="text-black font-bold">✓</span> Diagnóstico honesto de tu situación actual
              </p>
              <p className="text-gray-700">
                <span className="text-black font-bold">✓</span> Hoja de ruta clara y realista
              </p>
              <p className="text-gray-700">
                <span className="text-black font-bold">✓</span> Implementación con herramientas que escalan
              </p>
              <p className="text-gray-700">
                <span className="text-black font-bold">✓</span> Acompañamiento hasta que veas resultados
              </p>
            </div>

            <button className="btn-primary mt-8 inline-flex items-center gap-2">
              <span>Agendar Consulta Gratuita</span>
              <MapPin className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Benefits Grid */}
          <div className="animate-slide-in-right">
            <div className="grid gap-6">
              <div className="p-6 rounded-lg bg-gray-50/40 border border-gray-300/50 hover:border-gray-800/50 hover:bg-gray-50/60 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-800/10 flex items-center justify-center text-gray-700 group-hover:bg-gray-800/20 transition-all duration-300">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                      Crecimiento Medible
                    </h3>
                    <p className="text-sm text-gray-600">No vendemos ilusiones. Definimos métricas claras y mostramos avance real.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gray-50/40 border border-gray-300/50 hover:border-black/50 hover:bg-gray-50/60 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center text-black group-hover:bg-black/20 transition-all duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2 group-hover:text-black transition-colors">
                      Equipo Dedicado
                    </h3>
                    <p className="text-sm text-gray-600">Acceso directo, respuestas rápidas, decisiones ágiles. Sin intermediarios.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gray-50/40 border border-gray-300/50 hover:border-gray-800/50 hover:bg-gray-50/60 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-800/10 flex items-center justify-center text-gray-700 group-hover:bg-gray-800/20 transition-all duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                      Tecnología Accesible
                    </h3>
                    <p className="text-sm text-gray-600">Las mejores herramientas, sin la complejidad innecesaria. Escalable y mantenible.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gray-50/40 border border-gray-300/50 hover:border-black/50 hover:bg-gray-50/60 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center text-black group-hover:bg-black/20 transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2 group-hover:text-black transition-colors">
                      Soporte Permanente
                    </h3>
                    <p className="text-sm text-gray-600">Post-lanzamiento, capacitación, ajustes. Estamos ahí cuando nos necesitas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50/40 border border-gray-300/50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Realidad de Transformaciones Digitales
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-black mb-2">70%</div>
              <p className="text-gray-600">De proyectos IT fallan por mala consultoría</p>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-700 mb-2">2-3x</div>
              <p className="text-gray-600">Más ROI con asesoramiento real</p>
            </div>
            <div>
              <div className="text-4xl font-black text-black mb-2">50%</div>
              <p className="text-gray-600">Reducción de costos con NoCode</p>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-700 mb-2">90%</div>
              <p className="text-gray-600">De clientes quedan con acompañamiento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
