'use client'

import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/webs', label: 'Webs' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/agentes-ia', label: 'Agentes IA' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Zap className="w-7 h-7 text-black group-hover:text-gray-700 transition-colors" />
          </div>
          <span className="text-xl font-bold text-gradient">PA TechLead</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
          <button className="btn-primary text-sm">
            Empezar ahora
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black hover:text-gray-700 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50/95 border-t border-gray-300 animate-fade-in-up">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary w-full text-sm">
              Empezar ahora
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
