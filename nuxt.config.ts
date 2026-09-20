import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-09-20',
  ssr: true,
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxt/eslint'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#12161c' }],
      // Marks JS as available before first paint so scroll-triggered motion
      // can start hidden without hiding content for no-JS visitors.
      script: [{ innerHTML: 'document.documentElement.classList.add("js")', tagPosition: 'head' }],
    },
  },

  // Override in production with NUXT_PUBLIC_SITE_URL (e.g. on Vercel).
  runtimeConfig: {
    public: {
      siteUrl: 'http://localhost:3000',
    },
  },

  fonts: {
    families: [{ name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 700] }],
  },

  icon: {
    serverBundle: { collections: ['simple-icons', 'lucide'] },
    clientBundle: { scan: true },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'vesper',
          langs: ['ts', 'js', 'vue', 'bash', 'json', 'yaml', 'md', 'kotlin', 'java', 'csharp', 'python', 'sql', 'xml'],
        },
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
  },
})
