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
    tagline: 'Senior software engineer, 7+ years across web, mobile, and backend. Software that survives production, scales with demand, and adapts to real-world constraints.',
    email: 'anastasiosfortis@gmail.com',
    github: 'https://github.com/AnastasiosF',
    linkedin: 'https://www.linkedin.com/in/anastasios-fortis-18b453138/',
    siteUrl: siteUrl.replace(/\/$/, ''),
  } as const
}
