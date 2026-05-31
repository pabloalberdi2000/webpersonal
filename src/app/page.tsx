import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Overview from '@/components/sections/Overview'
import Trust from '@/components/sections/Trust'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PA TechLead | Consultoría IT, Páginas Web NoCode y Agentes IA',
  description: 'Consultoría tecnológica, páginas web personalizables, agentes IA inteligentes. Transformación digital accesible a precios justos.',
  keywords: ['consultoría IT', 'agentes IA', 'páginas web nocode', 'desarrollo web económico', 'automatización IA', 'transformación digital'],
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <Hero />
        <Overview />
        <Trust />
      </main>
      <Footer />
    </>
  )
}
