'use client'

import { ArrowRight, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-black/10 border border-black/30 rounded-full mb-8 transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <Zap className="w-4 h-4 text-black" />
          <span className="text-sm font-semibold text-black">Consultoría • Web NoCode • Agentes IA</span>
        </div>

        {/* Main headline */}
        <h1 className={`text-5xl md:text-7xl font-black mb-6 leading-tight transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Tecnología de calidad
          <br />
          <span className="text-gradient">sin presupuestos disparados.</span>
          <br />
          <span className="text-gray-700">Para emprendedores como tú.</span>
        </h1>

        {/* Subheadline */}
        <p className={`text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          PA TechLead surge para apoyar jóvenes emprendedores con grandes ideas pero sin capacidad económica para agencias caras. Ofrecemos consultoría, web NoCode y agentes IA. Premium. Asequible. Sin sorpresas.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <a href="/contacto" className="btn-primary flex items-center gap-3 group">
            <span>Agendar Sesión Gratuita</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
          <a
            href="https://wa.me/34658187924"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <span>💬 Hablar por WhatsApp</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className={`mt-16 pt-16 border-t border-gray-300/50 flex flex-col md:flex-row justify-around items-center gap-8 transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">4+</div>
            <p className="text-gray-600 text-sm">Años de Experiencia IT</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">50+</div>
            <p className="text-gray-600 text-sm">Proyectos Asesorados</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">100%</div>
            <p className="text-gray-600 text-sm">Clientes Satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
