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
      <main className="bg-white pt-24">
        <AIAgents />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
