'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: '¿Cuánto cuesta tu consultoría?',
      answer: 'No hay un precio fijo porque cada negocio es diferente. En la sesión gratuita analizamos tus necesidades y ofrecemos un presupuesto personalizado y transparente. Trabajamos con presupuestos desde pequeñas consultas hasta proyectos complejos.',
    },
    {
      question: '¿Cómo es la primera sesión?',
      answer: '30 minutos donde hablamos de tu negocio, desafíos actuales y objetivos. Sin venta forzada. Escucho, hago preguntas, y después te propongo soluciones realistas. Si encajamos, continuamos. Si no, te recomiendo a alguien que sí pueda ayudarte.',
    },
    {
      question: '¿Qué es una página NoCode y cómo funciona?',
      answer: 'Es un sitio web que TÚ puedes actualizar sin saber código. Cambias textos, imágenes, estructura desde un editor intuitivo. Es como editar un documento de Word, pero es tu web. Escalable, seguro y sin dependencia de programadores.',
    },
    {
      question: '¿Puedo hacer cambios en mi página NoCode?',
      answer: 'Sí, ese es el punto. Recibes capacitación en cómo actualizar tu sitio. Cambios simples (textos, imágenes, secciones) los haces tú. Cambios complejos, yo te asisto. Total autonomía con soporte.',
    },
    {
      question: '¿Cuánto tiempo toma un proyecto típico?',
      answer: 'Depende del alcance. Una consultoría breve: 2-4 semanas. Un sitio NoCode personalizado: 3-6 semanas. Un acompañamiento IT completo: 2-6 meses. En la sesión gratuita definimos timeline realista juntos.',
    },
    {
      question: '¿Necesito tener experiencia técnica?',
      answer: 'No. Exactamente para eso estoy: para traducir la complejidad técnica a acciones simples. Adaptamos explicaciones y procesos a tu nivel. Si trabajamos juntos, aseguro que entiendas cada paso.',
    },
    {
      question: '¿Qué incluye el acompañamiento de proyectos IT?',
      answer: 'Supervisión técnica, resolución de riesgos, testing, capacitación del equipo y soporte post-lanzamiento. No es solo contratar a alguien más: es tener a un experto viendo que todo salga bien.',
    },
    {
      question: '¿Cómo garantizan la seguridad de mis datos?',
      answer: 'Usamos infraestructura de primera categoría con encriptación, backups automáticos y cumplimiento de GDPR/normativas. Datos tuyos, seguros nuestros. Auditorías regulares incluidas en servicios Enterprise.',
    },
    {
      question: '¿Qué es un Agente IA y cómo funciona?',
      answer: 'Un agente IA es un programa inteligente que toma decisiones y realiza tareas automáticamente. Puede conversar (chatbot), automatizar procesos o analizar datos. Lo entrenamos con tus datos específicos para que entienda tu negocio.',
    },
    {
      question: '¿Dónde puedo poner un Agente IA?',
      answer: 'En tu web (chatbot), en tus sistemas (automatización), en tus procesos (análisis). Integramos agentes en prácticamente cualquier plataforma: WordPress, aplicaciones web, Slack, WhatsApp, CRM, etc.',
    },
    {
      question: '¿Cuánto cuesta un Agente IA?',
      answer: 'Varía mucho. Un chatbot simple puede costar desde pocas cientos. Un sistema complejo de automatización, más. En la sesión gratuita analizamos tu caso y te damos un presupuesto transparente.',
    },
    {
      question: '¿Mi Agente IA aprenderá con el tiempo?',
      answer: 'Sí. Configuramos agentes que mejoran continuamente. Monitoreamos su desempeño, identificamos areas de mejora, reentrenamos con nuevos datos. Es un proceso iterativo que genera más valor con el tiempo.',
    },
  ]

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-700">
            Todo lo que necesitas saber sobre PA TechLead
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300/50 rounded-xl overflow-hidden transition-all duration-300 animate-fade-in-up hover:border-black/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gray-50/40 hover:bg-gray-50/60 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-left text-black group-hover:text-black">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50/20 border-t border-gray-300/30 text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 bg-gray-50/40 border border-gray-300/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Tienes otra pregunta?
          </h3>
          <p className="text-gray-700 mb-6">
            Pregunta directamente. Respondo en menos de 2 horas y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-primary inline-block">
              Escribir Mensaje
            </a>
            <a
              href="https://wa.me/34658187924"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
