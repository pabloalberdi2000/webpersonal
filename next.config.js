/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compresión de respuestas
  compress: true,

  // Headers de caché para assets estáticos
  headers: async () => {
    return [
      {
        source: '/(:path*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },

  // Redirects para SEO
  redirects: async () => {
    return [
      // Aquí puedes añadir redirects si es necesario
    ]
  },

  // Rewrites para rutas limpias
  rewrites: async () => {
    return {
      beforeFiles: [
        // Aquí puedes añadir rewrites si es necesario
      ],
    }
  },

  // Experimental features para mejor performance
  experimental: {
    // Usa layouts compartidos para reducir JavaScript
    optimizePackageImports: ['lucide-react'],
  },

  // SwcMinify para minificación de JS/CSS
  swcMinify: true,

  // Output
  output: 'standalone',
}

module.exports = nextConfig
