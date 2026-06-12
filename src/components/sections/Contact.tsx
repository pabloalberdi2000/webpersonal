'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hablemos sobre tu <span className="text-gradient">Proyecto</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Contacta de la forma que prefieras. Ya sea por email, WhatsApp o rellenando el formulario, te responderé en máximo 2 horas. Sin esperas, sin promesas falsas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="p-8 bg-gray-50/40 border border-gray-300/50 rounded-xl hover:border-black/50 transition-all duration-300 group animate-fade-in-up">
            <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mb-4 group-hover:bg-black/20 transition-all duration-300">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:info@pawebsprint.es" className="hover:text-black transition-colors">
                info@pawebsprint.es
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">Respuesta en máximo 2 horas</p>
          </div>

          <div className="p-8 bg-gray-50/40 border border-gray-300/50 rounded-xl hover:border-gray-800/50 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-lg bg-gray-800/10 flex items-center justify-center mb-4 group-hover:bg-gray-800/20 transition-all duration-300">
              <Phone className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-600">
              <a href="https://wa.me/34658187924" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                +34 658 187 924
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">Chat directo, sin bots</p>
          </div>

          <div className="p-8 bg-gray-50/40 border border-gray-300/50 rounded-xl hover:border-black/50 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mb-4 group-hover:bg-black/20 transition-all duration-300">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">Ubicación</h3>
            <p className="text-gray-600">
              España (Servicios remotos)
            </p>
            <p className="text-sm text-gray-500 mt-2">Atiendo clientes en toda España y Latinoamérica</p>
          </div>
        </div>


        {/* CTA Bar */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Prefieres contacto directo e inmediato?
          </p>
          <a
            href="https://wa.me/34658187924"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Chatear por WhatsApp</span>
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
