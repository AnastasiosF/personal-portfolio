import { z } from 'zod'

/** "2024" or "2024-03". Kept as a string so YAML never parses it as a number/date. */
export const yearMonth = z
  .string()
  .regex(/^\d{4}(-\d{2})?$/, 'Use YYYY or YYYY-MM')

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: yearMonth,
  featured: z.boolean().default(false),
  status: z.enum(['active', 'archived', 'wip']).default('active'),
  tech: z.array(z.string()).default([]),
  repo: z.string().url().optional(),
  url: z.string().url().optional(),
  image: z.string().optional(),
})

export const experienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  location: z.string().optional(),
  start: yearMonth,
  end: yearMonth.optional(),
  url: z.string().url().optional(),
  highlights: z.array(z.string()),
  tech: z.array(z.string()).default([]),
})

export const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  field: z.string().optional(),
  start: yearMonth,
  end: yearMonth.optional(),
  notes: z.array(z.string()).default([]),
})

export const skillsSchema = z.object({
  groups: z.array(
    z.object({
      name: z.string(),
      items: z.array(z.string()),
    }),
  ),
})
