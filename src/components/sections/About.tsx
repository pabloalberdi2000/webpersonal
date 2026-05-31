'use client'

import { Award, Handshake, Rocket, Target, Users, Zap } from 'lucide-react'

export default function About() {
  return (
    <>
      {/* Nuestra Misión */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Misión</h2>
            <div className="h-1 w-20 bg-black mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Democratizar el acceso a herramientas tecnológicas de calidad. Apoyar a jóvenes emprendedores con grandes ideas pero sin presupuestos para agencias caras. Porque tu visión merece una web profesional sin que te arruines en el intento.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Nuestra Historia</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">El Problema</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Jóvenes emprendedores con grandes visiones se encuentran con una realidad brutal: las agencias tradicionales cobran presupuestos estratosféricos que simplemente no pueden permitirse.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Muchos renuncian a tener presencia digital profesional. Otros caen en manos de desarrolladores freelance que desaparecen después del lanzamiento.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Nuestra Solución</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                PA TechLead nace para cambiar eso. Ofrecemos consultoría tecnológica, webs profesionales y agentes IA a precios justos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sin intermediarios. Sin sorpresas. Sin comprometer la calidad. Solo acompañamiento real de un equipo que cree en tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Somos Diferentes */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">¿Por Qué Somos Diferentes?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-300 hover:border-black transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-6 text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Para Emprendedores</h3>
              <p className="text-gray-700">
                Nacimos específicamente para apoyar jóvenes con grandes ideas pero presupuestos limitados. Tu éxito es nuestro éxito.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-300 hover:border-black transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-6 text-white">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Sin Sorpresas</h3>
              <p className="text-gray-700">
                Presupuestos transparentes desde la primera conversación. Sin letra pequeña. Sin costos ocultos. Lo que ves es lo que pagas.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-300 hover:border-black transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-6 text-white">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Calidad Premium</h3>
              <p className="text-gray-700">
                Las mismas tecnologías que usan startups de Silicon Valley. Next.js, React, IA moderna. Sin compromiso en calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Honestidad</h3>
              <p className="text-gray-300 text-sm">
                Sin engaños ni promesas falsas. Te decimos la verdad, aunque no sea lo que quieres escuchar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Acompañamiento</h3>
              <p className="text-gray-300 text-sm">
                No te dejamos solo. Estamos contigo antes, durante y después del lanzamiento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Agilidad</h3>
              <p className="text-gray-300 text-sm">
                Decisiones rápidas. Sin burocracia. Sin comités de aprobación innecesarios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Excelencia</h3>
              <p className="text-gray-300 text-sm">
                Premium no significa caro. Significa bien hecho. Todos nuestros proyectos son de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Números que Hablan</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-300">
              <div className="text-5xl font-black text-black mb-2">50+</div>
              <p className="text-gray-700 font-semibold">Proyectos Completados</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-300">
              <div className="text-5xl font-black text-black mb-2">10+</div>
              <p className="text-gray-700 font-semibold">Años de Experiencia</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-300">
              <div className="text-5xl font-black text-black mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Clientes Satisfechos</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-300">
              <div className="text-5xl font-black text-black mb-2">0</div>
              <p className="text-gray-700 font-semibold">Sorpresas en Precios</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Agendar una sesión gratuita. Sin compromiso. Sin presión de venta.
          </p>
          <a href="/contacto" className="btn-primary bg-white text-black hover:bg-gray-100 inline-block">
            Agendar Sesión Gratuita
          </a>
        </div>
      </section>
    </>
  )
}
