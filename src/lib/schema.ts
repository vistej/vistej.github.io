import { z } from 'zod';
import portfolioJson from '../../data/portfolio.json';

const url = z.url();
const nullableUrl = url.nullable().optional();
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Expected YYYY-MM');

export const portfolioSchema = z.object({
  personal: z.object({
    name: z.string().min(1),
    title: z.string().min(1),
    headline: z.string().min(1),
    location: z.string().min(1),
    email: z.email(),
    avatarUrl: z.string().optional(),
    resumeUrl: z.string().optional(),
    socials: z.object({
      github: url.optional(),
      linkedin: url.optional(),
      twitter: url.optional(),
      website: url.optional(),
    }),
    bio: z.string().min(1),
  }),
  skills: z.record(z.string(), z.array(z.string())),
  experience: z.array(
    z.object({
      role: z.string(),
      company: z.string(),
      client: z.string().optional(),
      location: z.string(),
      employmentType: z.string().optional(),
      startDate: month,
      endDate: month.optional(),
      displayPeriod: z.string().optional(),
      featured: z.boolean().optional(),
      summary: z.string(),
      achievements: z.array(z.string()),
      technologies: z.array(z.string()),
    }),
  ),
  projects: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      category: z.string(),
      featured: z.boolean(),
      description: z.string(),
      highlights: z.array(z.string()),
      technologies: z.array(z.string()),
      status: z.enum(['public', 'private', 'case-study']).optional(),
      linkLabel: z.string().optional(),
      links: z.object({
        demo: nullableUrl,
        github: nullableUrl,
      }),
    }),
  ),
  education: z.array(
    z.object({
      degree: z.string(),
      specialization: z.string(),
      institution: z.string(),
      location: z.string(),
      period: z.string(),
      coursework: z.array(z.string()),
      thesisProjects: z.array(z.string()).optional(),
    }),
  ),
});

export const portfolio = portfolioSchema.parse(portfolioJson);
