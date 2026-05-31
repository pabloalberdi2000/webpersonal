'use client'

import { Zap, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Zap className="w-6 h-6 text-black group-hover:text-gray-700 transition-colors" />
              <span className="font-bold text-lg text-gradient">PA TechLead</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Páginas web profesionales en tiempo récord. Sin precios inflados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-black">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-black transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/webs" className="text-gray-600 hover:text-black transition-colors">
                  Webs
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-gray-600 hover:text-black transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/agentes-ia" className="text-gray-600 hover:text-black transition-colors">
                  Agentes IA
                </a>
              </li>
              <li>
                <a href="/nosotros" className="text-gray-600 hover:text-black transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-600 hover:text-black transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-black">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-black" />
                <a href="mailto:info@pawebsprint.es" className="text-gray-600 hover:text-black transition-colors">
                  info@pawebsprint.es
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-700" />
                <a href="https://wa.me/34XXXXXXXXX" className="text-gray-600 hover:text-gray-700 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-black" />
                <span className="text-gray-600">España</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-black">Sígueme</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-50/50 border border-gray-300/50 flex items-center justify-center text-gray-600 hover:text-black hover:border-black/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-50/50 border border-gray-300/50 flex items-center justify-center text-gray-600 hover:text-gray-700 hover:border-gray-800/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-50/50 border border-gray-300/50 flex items-center justify-center text-gray-600 hover:text-black hover:border-black/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>
            © {currentYear} PA TechLead. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
