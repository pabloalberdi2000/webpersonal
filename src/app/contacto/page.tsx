import { Metadata } from 'next'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contacto | PA TechLead',
  description: 'Contacta con PA TechLead. Consultoría gratuita, sin compromiso. Respuesta en menos de 2 horas.',
  keywords: ['contacto', 'consultoría gratuita', 'whatsapp', 'email', 'agendar sesión'],
}

export default function ContactoPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero reducido */}
        <section className="section-padding pt-32 text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Estamos aquí para <span className="text-gradient">ayudarte</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto. Sesión gratuita, sin compromiso, respuesta rápida.
          </p>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
