'use client'

import { Brain, Zap, Shield, BarChart3, MessageSquare, Cpu } from 'lucide-react'

interface AIAgent {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  examples: string[]
}

export default function AIAgents() {
  const agents: AIAgent[] = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Chatbots & Asistentes IA',
      description: 'Agentes conversacionales que atienden a tus clientes 24/7. Responden preguntas, resuelven dudas, generan leads automáticamente.',
      benefits: [
        'Disponible 24/7 sin descansos',
        'Responde a múltiples idiomas',
        'Aprende del histórico de conversaciones',
        'Integrado en web, WhatsApp, Email',
      ],
      examples: [
        'Chatbot de atención al cliente',
        'Asistente de ventas que califica leads',
        'Bot de soporte técnico',
        'Agente de reservas automático',
      ],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Automatización de Procesos',
      description: 'Agentes IA que automatizan tareas repetitivas. Procesa datos, genera reportes, actualiza sistemas automáticamente.',
      benefits: [
        'Automatiza tareas manuales',
        'Procesa datos a escala',
        'Genera reportes inteligentes',
        'Integración con tus sistemas actuales',
      ],
      examples: [
        'Procesamiento de pedidos automático',
        'Extracción y análisis de datos',
        'Generación automática de documentos',
        'Sincronización entre plataformas',
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Análisis Inteligente de Datos',
      description: 'Agentes que entienden tus datos y te dan insights accionables. Predicciones, tendencias, oportunidades detectadas automáticamente.',
      benefits: [
        'Análisis predictivo de tendencias',
        'Detección de anomalías',
        'Recomendaciones automáticas',
        'Dashboards inteligentes',
      ],
      examples: [
        'Predicción de comportamiento de clientes',
        'Análisis de rentabilidad por cliente',
        'Detección de fraude automática',
        'Recomendaciones de productos personalizadas',
      ],
    },
  ]

  return (
    <section id="agentes-ia" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Agentes IA <span className="text-gradient">para Tu Negocio</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            IA que trabaja para ti. Montamos agentes inteligentes en tu web, sistemas y procesos. Automatizan, analizan y generan valor 24/7.
          </p>
        </div>

        {/* AI Agents Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50/40 border border-gray-300/50 hover:border-black/30 hover:bg-gray-50/60 transition-all duration-300 animate-fade-in-up p-8 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mb-4 text-black">
                {agent.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3">{agent.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{agent.description}</p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3 text-sm uppercase tracking-wide">Beneficios</h4>
                <ul className="space-y-2">
                  {agent.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-black font-bold mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Examples */}
              <div>
                <h4 className="font-semibold text-black mb-3 text-sm uppercase tracking-wide">Casos de Uso</h4>
                <ul className="space-y-2">
                  {agent.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-gray-700">→</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">
            ¿Cómo Montamos Agentes IA?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mx-auto mb-4 text-black">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-black mb-2">1. Análisis & Diseño</h4>
              <p className="text-gray-700 text-sm">
                Entendemos tu negocio, definimos qué tareas automatizar y qué resultados esperar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mx-auto mb-4 text-black">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-black mb-2">2. Desarrollo & Entrenamiento</h4>
              <p className="text-gray-700 text-sm">
                Construimos el agente, lo entrenamos con tus datos, lo probamos exhaustivamente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mx-auto mb-4 text-black">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-black mb-2">3. Implementación & Monitoreo</h4>
              <p className="text-gray-700 text-sm">
                Lo integramos en tu sistema, monitoreamos su rendimiento, ajustamos continuamente.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50/40 border border-gray-300/50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Tu Negocio Necesita IA?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Automatización inteligente, análisis predictivo, atención 24/7. Agenda una consulta gratuita para explorar las posibilidades.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-primary inline-flex items-center gap-2">
              <span>Agendar Sesión Gratuita</span>
              <Zap className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/34658187924"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 justify-center"
            >
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
