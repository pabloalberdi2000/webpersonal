import { Metadata } from 'next'
import WebsSection from '@/components/sections/WebsSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Webs a Medida + Posicionamiento SEO | PA TechLead',
  description: 'Desarrollo web profesional a bajo coste con posicionamiento en Google. 100% personalizadas. Integraciones con Google Analytics, Search Console y estrategia SEO incluida.',
  keywords: ['desarrollo web', 'webs a medida', 'web profesional', 'SEO', 'posicionamiento Google', 'web económica', 'integraciones', 'Google Analytics'],
}

export default function WebsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <WebsSection />
      </main>
      <Footer />
    </>
  )
}
