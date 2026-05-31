'use client'

import { Check, Code2, Zap, Settings, BarChart3, Smartphone, TrendingUp, Search, Eye, MapPin } from 'lucide-react'

export default function WebsSection() {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Desarrollo Profesional',
      description: 'Código limpio, moderno y mantenible. React, Next.js, Tailwind CSS. Las tecnologías que usan las mejores empresas del mundo.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Ultrarrápidas',
      description: 'Optimizadas para Core Web Vitals. Cargan en menos de 1 segundo. La velocidad es dinero en internet.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: '100% Responsive',
      description: 'Perfectas en móvil, tablet y desktop. Tus clientes te encontrarán desde cualquier dispositivo.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'SEO Optimizado',
      description: 'Indexado en Google desde el día 1. Estructura semántica, meta tags, sitemap automático.',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Integraciones',
      description: 'CRM, email marketing, análisis, pagos. Conecta tu web con las herramientas que usas.',
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: 'Actualizables sin Código',
      description: 'Tú actualizas contenido sin saber programar. Control total sin dependencia de desarrolladores.',
    },
  ]

  const integrations = [
    { name: 'Stripe / PayPal', category: 'Pagos' },
    { name: 'Mailchimp / SendGrid', category: 'Email' },
    { name: 'HubSpot / Pipedrive', category: 'CRM' },
    { name: 'Slack / Discord', category: 'Comunicación' },
    { name: 'Google Analytics / Hotjar', category: 'Análisis' },
    { name: 'Zapier / Make', category: 'Automatización' },
    { name: 'Calendly / Typeform', category: 'Herramientas' },
    { name: 'Y muchas más...', category: 'Personalizadas' },
  ]

  const plans = [
    {
      title: 'Web Esencial',
      description: 'Para comenzar con presencia profesional',
      features: [
        'Hasta 5 páginas personalizadas',
        'Diseño responsive',
        'Formulario de contacto',
        'SEO básico',
        'SSL incluido',
        'Editor para actualizar',
      ],
      cta: 'Ver detalles',
    },
    {
      title: 'Web Profesional',
      description: 'Para empresas en crecimiento',
      highlighted: true,
      features: [
        'Hasta 15 páginas',
        'Diseño premium personalizado',
        'Blog integrado',
        'SEO avanzado',
        'Integraciones (2-3)',
        'Editor completo',
        'Análisis de visitantes',
        'Soporte prioritario',
      ],
      cta: 'Más información',
    },
    {
      title: 'Web Personalizada',
      description: 'Soluciones a medida sin límites',
      features: [
        'Páginas ilimitadas',
        'Funcionalidades complejas',
        'E-commerce integrado',
        'Múltiples integraciones',
        'Automatización avanzada',
        'Dashboard personalizado',
        'Consultoría incluida',
        'Soporte 24/7',
      ],
      cta: 'Consultar',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white pt-32">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Webs <span className="text-gradient">a Medida</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Desarrollo web profesional a precios bajos. 100% personalizadas. Flexibles. Conecta con Stripe, PayPal, CRM, email marketing y más.
          </p>
          <a href="/contacto" className="btn-primary">
            Crear mi web ahora
          </a>
        </div>
      </section>

      {/* Descripción */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">¿Por Qué Elegir PA TechLead para tu Web?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Presupuestos bajos:</span> Sin intermediarios, sin inflaciones de mercado.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">100% a tu medida:</span> No templates. Tu web, tu diseño, tu lógica.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Totalmente flexible:</span> Escala con tu negocio. Agrega funcionalidades cuando las necesites.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Integraciones sin límites:</span> Conecta con las herramientas que ya usas.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Tú actualizas sin código:</span> Editor intuitivo. Cambia contenido sin programador.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, i) => (
                <div key={i} className="p-6 bg-white rounded-lg border border-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center mb-4 text-black">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Características Incluidas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 rounded-xl border border-gray-300 hover:border-black hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posicionamiento Web SEO */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Posicionamiento Web en Google</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                No solo creamos webs bonitas, las posicionamos en Google. Usamos las herramientas y estrategias que Google recomienda para que tus clientes te encuentren.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Search className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Google Search Console:</span> Monitoreo completo de tu posicionamiento y errores de indexación.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Google Analytics 4:</span> Análisis profundo de visitantes, comportamiento y conversiones.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Google Keyword Planner:</span> Investigación de palabras clave y tendencias de búsqueda.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Google PageSpeed Insights:</span> Optimización de velocidad para mejor ranking.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Posicionamiento Geográfico:</span> Aparecer primero en búsquedas locales de tu zona.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Incluye Estrategia SEO</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><span className="font-bold">Estructura técnica</span> optimizada para Google</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><span className="font-bold">Meta tags</span> estratégicos por página</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><span className="font-bold">Sitemap y robots.txt</span> para mejor rastreo</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><span className="font-bold">Schema.org markup</span> para resultados enriquecidos</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><span className="font-bold">Core Web Vitals</span> optimizados (LCP, FID, CLS)</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><span className="font-bold">Reporte mensual</span> con datos de posicionamiento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Integraciones Disponibles</h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Conecta tu web con las herramientas que ya usas. Si no está en la lista, podemos integrarla.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {integrations.map((int, i) => (
              <div
                key={i}
                className="p-6 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <p className="font-bold mb-1">{int.name}</p>
                <p className="text-sm text-gray-400">{int.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Planes Flexibles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-black text-white border-2 border-black shadow-2xl'
                    : 'bg-gray-50 border border-gray-300'
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 bg-white text-black text-sm font-bold rounded-full">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className={plan.highlighted ? 'text-gray-300' : 'text-gray-600'}>
                  {plan.description}
                </p>
                <ul className="my-8 space-y-3">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">¿Listo para tu Web Profesional?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Agendar una sesión gratuita. Analizamos tus necesidades y te damos un presupuesto sin sorpresas.
          </p>
          <a href="/contacto" className="btn-primary bg-white text-black hover:bg-gray-100 inline-block">
            Agendar Sesión Gratuita
          </a>
        </div>
      </section>
    </>
  )
}
