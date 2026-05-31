'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aquí irá la integración real con tu servicio de email (EmailJS, etc.)
      // Por ahora, simulamos el envío
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus('success')
      setFormData({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' })

      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Listo para tu <span className="text-gradient">Web Sprint</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Contacta hoy mismo. En menos de 2 horas recibirás una respuesta con los primeros pasos.
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
              <a href="https://wa.me/34XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                +34 XXX XXX XXX
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

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900 border border-gray-300/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8">
              Cuéntame sobre tu proyecto
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-black/10 border border-black/50 rounded-lg text-black">
                ¡Gracias! Tu mensaje fue enviado. Pronto nos pondremos en contacto.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-400/10 border border-red-400/50 rounded-lg text-red-400">
                Error al enviar el mensaje. Intenta por WhatsApp o email.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+34 XXX XXX XXX"
                  className="w-full"
                />
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                  Nombre empresa/negocio *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Tu empresa"
                  className="w-full"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                  Cuéntame sobre tu proyecto *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="¿Qué tipo de sitio web necesitas? ¿Cuál es tu presupuesto? ¿Tienes timeline?"
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span>
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </span>
              </button>

              <p className="text-sm text-gray-600 text-center">
                Prometemos no spamear. Respuesta rápida garantizada.
              </p>
            </form>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Prefieres contacto directo e inmediato?
          </p>
          <a
            href="https://wa.me/34XXXXXXXXX"
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
