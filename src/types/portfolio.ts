import type { z } from 'zod';
import type { portfolioSchema } from '../lib/schema';

export type PortfolioData = z.infer<typeof portfolioSchema>;
export type Project = PortfolioData['projects'][number];
export type Experience = PortfolioData['experience'][number];
