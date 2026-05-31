import { Metadata } from 'next'
import About from '@/components/sections/About'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Nosotros | PA TechLead',
  description: 'Conoce la historia de PA TechLead, nuestra misión y los valores que nos guían en la transformación digital.',
  keywords: ['sobre nosotros', 'misión', 'valores', 'PA TechLead', 'emprendedores'],
}

export default function NosotrosPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white pt-24">
        <About />
      </main>
      <Footer />
    </>
  )
}
