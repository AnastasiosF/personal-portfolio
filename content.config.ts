import { defineCollection, defineContentConfig } from '@nuxt/content'
import { educationSchema, experienceSchema, projectSchema, skillsSchema } from './shared/content-schemas'

export default defineContentConfig({
  collections: {
    // Each project is a Markdown case study and gets its own page at /projects/<slug>.
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: projectSchema,
    }),
    experience: defineCollection({
      type: 'data',
      source: 'experience/*.yml',
      schema: experienceSchema,
    }),
    education: defineCollection({
      type: 'data',
      source: 'education/*.yml',
      schema: educationSchema,
    }),
    skills: defineCollection({
      type: 'data',
      source: 'skills.yml',
      schema: skillsSchema,
    }),
  },
})
