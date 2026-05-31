import { Metadata } from 'next'
import AIAgents from '@/components/sections/AIAgents'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Agentes IA | PA TechLead',
  description: 'Agentes inteligentes para automatizar procesos, chatbots 24/7, análisis predictivo. Montamos IA en tus sistemas y web.',
  keywords: ['agentes IA', 'chatbot IA', 'automatización IA', 'análisis predictivo', 'inteligencia artificial'],
}

export default function AgentesIAPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero reducido */}
        <section className="section-padding pt-32 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Agentes IA <span className="text-gradient">Inteligentes</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Automatización, análisis y conversaciones inteligentes. IA que trabaja para ti 24/7.
          </p>
        </section>

        <AIAgents />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
