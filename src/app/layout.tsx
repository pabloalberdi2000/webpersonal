import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PA TechLead | Consultoría Tecnológica y Páginas Web NoCode',
  description: 'Consultoría tecnológica, acompañamiento de proyectos IT y páginas web actualizables sin código. Tecnología accesible a precios bajos.',
  keywords: 'consultoría tecnológica, páginas web nocode, acompañamiento proyectos IT, desarrollo web económico, digital transformation',
  authors: [{ name: 'Pablo Alberdi', url: 'https://pawebsprint.es' }],
  creator: 'Pablo Alberdi - PA TechLead',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pawebsprint.es',
    siteName: 'PA TechLead',
    title: 'PA TechLead | Páginas Web Profesionales en Tiempo Récord',
    description: 'Diseño web profesional y económico. Websites listos en tiempo récord sin intermediarios.',
    images: [
      {
        url: 'https://pawebsprint.es/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PA TechLead - Tu web profesional en tiempo récord',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PA TechLead | Páginas Web Profesionales en Tiempo Récord',
    description: 'Diseño web profesional, rápido y económico. Sin precios inflados.',
    creator: '@pawebsprint',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://pawebsprint.es',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'PA TechLead',
              image: 'https://pawebsprint.es/logo.png',
              description: 'Diseño web profesional, rápido y económico en tiempo récord',
              url: 'https://pawebsprint.es',
              telephone: '+34-XXX-XXX-XXX',
              sameAs: [
                'https://www.linkedin.com/in/pabloalberdi',
                'https://twitter.com/pawebsprint',
                'https://github.com/pabloalberdi',
              ],
              areaServed: 'ES',
              founder: {
                '@type': 'Person',
                name: 'Pablo Alberdi',
              },
              priceRange: '€€',
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  )
}
