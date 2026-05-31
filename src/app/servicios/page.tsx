import { Metadata } from 'next'
import Services from '@/components/sections/Services'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Servicios | PA TechLead',
  description: 'Consultoría tecnológica, acompañamiento IT, páginas web NoCode y agentes IA. Soluciones personalizadas a precios accesibles.',
  keywords: ['servicios', 'consultoría IT', 'desarrollo web', 'agentes IA', 'transformación digital'],
}

export default function ServiciosPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero reducido */}
        <section className="section-padding pt-32 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Nuestros <span className="text-gradient">Servicios</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Soluciones completas para tu transformación digital. Desde consultoría hasta implementación.
          </p>
        </section>

        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
