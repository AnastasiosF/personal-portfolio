/**
 * Single source of truth for personal details used across the site.
 * Replace the PLACEHOLDER values before deploying.
 */
export const useSiteConfig = () => {
  const { public: { siteUrl } } = useRuntimeConfig()

  return {
    name: 'Anastasios Fortis',
    handle: 'afortis',
    host: 'portfolio',
    tagline: 'Software engineer building backends, Android apps, and the tooling around them.',
    email: 'PLACEHOLDER@example.com',
    github: 'https://github.com/AnastasiosF',
    linkedin: 'https://www.linkedin.com/in/PLACEHOLDER',
    siteUrl: siteUrl.replace(/\/$/, ''),
    cvPath: '/cv/anastasios-fortis-cv.pdf',
  } as const
}
